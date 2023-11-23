const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Should test positive float', () => {
      expect(calculateNumber('SUM', 1.3, 2.5)).to.equal(4);
    });

    it('Should test negative float', () => {
      expect(calculateNumber('SUM', -1.3, -2.5)).to.equal(-3);
    });
  });

  describe('SUBTRACT', () => {
    it('Should test positive floating number', () => {
      expect(calculateNumber('SUBTRACT', 1.3, 2.5)).to.equal(-2);
    });

    it('Should test negative floating number', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -2.5)).to.equal(1);
    });
  });

  describe('DIVIDE', () => {
    it('Should test positive floating number', () => {
      expect(
        calculateNumber('DIVIDE', 1.3, 2.5)).to.equal(
        0.3333333333333333
      );
    });

    it('Should test positive floating number', () => {
      expect(calculateNumber('DIVIDE', 6.4, 2.4)).to.equal(3.0);
    });

    it('Should test negative floating number', () => {
      expect(calculateNumber('DIVIDE', -6.4, -2.4)).to.equal(3.0);
    });

    it('Should test for Zero division', () => {
      expect(calculateNumber('DIVIDE', 1.3, 0.4)).to.equal('Error');
    });
  });
});
