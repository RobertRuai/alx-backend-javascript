const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Should test positive float', () => {
      assert.strictEqual(calculateNumber('SUM', 1.3, 2.5), 4);
    });

    it('Should test negative float', () => {
      assert.strictEqual(calculateNumber('SUM', -1.3, -2.5), -3);
    });
  });

  describe('SUBTRACT', () => {
    it('Should test positive floating number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.3, 2.5), -2);
    });

    it('Should test negative floating number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.3, -2.5), 1);
    });
  });

  describe('DIVIDE', () => {
    it('Should test positive floating number', () => {
      assert.strictEqual(
        calculateNumber('DIVIDE', 1.3, 2.5),
        0.3333333333333333
      );
    });

    it('Should test positive floating number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.4, 2.4), 3.0);
    });

    it('Should test negative floating number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.4, -2.4), 3.0);
    });

    it('Should test for Zero division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.3, 0.4), 'Error');
    });
  });
});
