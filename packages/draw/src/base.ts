let globalId = 0;
export default abstract class Base {
  _id: number;
  constructor() {
    this._id = globalId++;
  }
  abstract toSVG(): string;
}
