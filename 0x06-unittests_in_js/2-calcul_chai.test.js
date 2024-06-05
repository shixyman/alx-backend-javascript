const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of the rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of the rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of the rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if the rounded value of b is 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  it('should throw an error for an invalid type', function() {
    expect(() => calculateNumber('INVALID', 1, 2)).to.throw(/Invalid type/);
  });
});