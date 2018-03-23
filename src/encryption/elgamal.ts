import { BigInteger as BigInt } from 'jsbn';
import * as Utils from './utils';
import EncryptedValue from './EncryptedValue';

export default class ElGamal {

  public p: BigInt;
  public g: BigInt;
  public y: BigInt;
  public x: BigInt;

  public static async generateAsync(primeBits = 32) {
    let q;
    let p;
    do {
      q = await Utils.getBigPrimeAsync(primeBits - 1);
      p = q.shiftLeft(1).add(BigInt.ONE);
    } while (!p.isProbablePrime());

    let g;
    do {
      // Avoid g=2 because of Bleichenbacher's attack
      g = await Utils.getRandomBigIntAsync(new BigInt('3'), p);
    } while (
      g.modPowInt(2, p).equals(BigInt.ONE) ||
      g.modPow(q, p).equals(BigInt.ONE) ||
      // g|p-1
      p.subtract(BigInt.ONE).remainder(g).equals(BigInt.ZERO) ||
      // g^(-1)|p-1 (evades Khadir's attack)
      p.subtract(BigInt.ONE).remainder(g.modInverse(p)).equals(BigInt.ZERO)
      );

    // Generate private key
    const x = await Utils.getRandomBigIntAsync(
      Utils.BIG_TWO,
      p.subtract(BigInt.ONE)
    );

    // Generate public key
    const y = g.modPow(x, p);

    return new ElGamal(p, g, y, x);
  }

  public constructor(p, g, y, x) {
    this.p = Utils.parseBigInt(p);
    this.g = Utils.parseBigInt(g);
    this.y = Utils.parseBigInt(y);
    this.x = Utils.parseBigInt(x);
  }


  public async encryptAsync(m, k) {
    const random = Utils.parseBigInt(k) || await Utils.getRandomBigIntAsync(
      BigInt.ONE,
      this.p.subtract(BigInt.ONE)
    );
    const mBi = Utils.parseBigInt(m).bi;
    const p = this.p;

    const a = this.g.modPow(random, p);
    const b = this.y.modPow(random, p).multiply(mBi).remainder(p);

    return new EncryptedValue(a, b);
  }


  public async decryptAsync(m) {
    const p = this.p;
    const r = await Utils.getRandomBigIntAsync(
      Utils.BIG_TWO,
      this.p.subtract(BigInt.ONE)
    );

    const aBlind = this.g.modPow(r, p).multiply(m.a).remainder(p);
    const ax = aBlind.modPow(this.x, p);

    const plaintextBlind = ax.modInverse(p).multiply(m.b).remainder(p);
    const plaintext = this.y.modPow(r, p).multiply(plaintextBlind).remainder(p);

    return Utils.parseBigInt(plaintext);
  }

}
