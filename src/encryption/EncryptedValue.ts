import { BigInteger as BigInt } from 'jsbn';
import * as Utils from './utils';

export default class EncryptedValue {

  a: BigInt;
  b: BigInt;

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  /**
   * Performs homomorphic multiplication of the current and the given value.
   * @param {EncryptedValue} encryptedValue Value too multiply the current value
   * with.
   * @returns {EncryptedValue}
   */
  multiply(encryptedValue) {
    return new EncryptedValue(
      this.a.multiply(encryptedValue.a),
      this.b.multiply(encryptedValue.b)
    );
  }
}
