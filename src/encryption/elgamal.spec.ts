import * as assert from 'assert';
import Elgamal from './elgamal';

describe('ElgamalTest', function() {

  it('should get elgamal value from class', () => {
    const elgamal = new Elgamal('x');
    assert.equal(elgamal.fun(), 0, 'should be 00');
  });


  it('should get elgamal value from constructor and getter', () => {
    const elgamal = new Elgamal('x');
    console.log(elgamal.getX());
    assert.equal(elgamal.getX(), 'x', 'should be 00');
  });

});
