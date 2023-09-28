export default class Currency {
  constructor(code, name) {
  this.code = code;
  this.name = name;
  }
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
