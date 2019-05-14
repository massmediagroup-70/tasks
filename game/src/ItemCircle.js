import Item from './Item';

export default class ItemCircle extends Item {
  constructor(x, y) {
    super(x, y);
    this.sign = 1;
  }
}
