export default class User {
  constructor(item) {
    this.item = item;
  }

  move(x, y) {
    this.item.push(x, y);
  }
}
