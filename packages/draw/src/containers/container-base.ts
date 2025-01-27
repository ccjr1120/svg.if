import Base from "../base";

export default abstract class ContainerBase extends Base {
  children: Base[] = [];
  addChild(child: Base) {
    this.children.push(child);
  }
  removeChild(children: Base) {
    this.children = this.children.filter((child) => child !== children);
  }
}
