const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of the rounded numbers', function() {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of the rounded numbers', function() {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of the rounded numbers', function() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" if the rounded value of b is 0', function() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  it('should throw an error for an invalid type', function() {
    assert.throws(() => calculateNumber('INVALID', 1, 2), /Invalid type/);
  });
});
