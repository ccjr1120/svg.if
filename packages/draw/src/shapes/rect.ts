import ShapeBase from "./shape-base";

export default class Rect extends ShapeBase {
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(x: number, y: number, width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
  toSVG(): string {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" />`;
  }
}
