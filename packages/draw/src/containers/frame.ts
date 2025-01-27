import ContainerBase from "./container-base";

export default class Frame extends ContainerBase {
  _type: string;
  toSVG(): string {
    return `<svg viewBox="0 0 ${this.width} ${
      this.height
    }" xmlns="http://www.w3.org/2000/svg">
      ${this.children.map((child) => child.toSVG()).join("")}
    </svg>`;
  }

  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this._type = "frame";
    this.width = width;
    this.height = height;
  }
}
