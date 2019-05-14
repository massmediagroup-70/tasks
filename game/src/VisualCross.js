import ItemCross from './ItemCross';

export default class VisualCross extends ItemCross {
  // eslint-disable-next-line class-methods-use-this
  push(context, color, x1, y1) {
    const x = x1 * 200 + 15;
    const y = y1 * 200 + 15;

    // eslint-disable-next-line no-param-reassign
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 170, y + 170);
    context.moveTo(x + 170, y);
    context.lineTo(x, y + 170);
    context.stroke();
  }
}
