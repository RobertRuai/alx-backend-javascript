export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor === Building.prototype.evacuationWarningMessage) { throw Error('Class extending Building must override evacuationWarningMessage'); }
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) { throw Error('Class extending Building must override evacuationWarningMessage'); }
  }
}
