import Base from "../base";
import ContainerBase from "./container-base";

export default class Group extends ContainerBase {
  toSVG(): string {
    return `<g>${this.children.map((child) => child.toSVG()).join("")}</g>`;
  }
  constructor() {
    super();
  }
}
