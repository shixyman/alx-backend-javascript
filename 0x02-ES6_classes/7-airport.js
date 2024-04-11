export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._cde = code;
  }

  toString() {
    return `[object ${this._cde}]`;
  }
}