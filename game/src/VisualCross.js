import ItemCross from './ItemCross';

export default class VisualCross extends ItemCross {
  constructor() {
    super();
  }

  push(context, color, x, y) {
    x = x * 200 + 15;
    y = y * 200 + 15;

    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 170, y + 170);
    context.moveTo(x + 170, y);
    context.lineTo(x, y + 170);
    context.stroke();
  }
}
