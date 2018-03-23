import * as assert from 'assert';
import ElGamal from './elgamal';
//
describe('ElgamalTest', function() {

  it('should 1', async () => {
    const eg = await ElGamal.generateAsync();
    assert.equal(0, 0, 'should be 00');
  });

});
