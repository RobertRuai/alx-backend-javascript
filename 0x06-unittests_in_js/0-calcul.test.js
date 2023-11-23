const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calclateNumber', () => {
  it('round first arg', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(1.5, 0), 2);
    assert.equal(calculateNumber(1.7, 0), 2);
  });

  it('round 2nd arg', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
	assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(0, 1.5), 2);
    assert.equal(calculateNumber(0, 1.7), 2);
  });

  it('should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.8), 3);
    assert.equal(calculateNumber(1.6, 1.8), 4);
  });
});
