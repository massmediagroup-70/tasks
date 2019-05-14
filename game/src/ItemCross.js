import Item from './Item';

export default class ItemCross extends Item {
  constructor(x, y) {
    super(x, y);
    this.sign = 2;
  }
}
