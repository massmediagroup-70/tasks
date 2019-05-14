import ItemCircle from './ItemCircle';

export default class VisualCircle extends ItemCircle {
  // eslint-disable-next-line class-methods-use-this
  push(context, color, x, y) {
    // eslint-disable-next-line no-param-reassign
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x * 200 + 100, y * 200 + 100, 85, 0, 2 * Math.PI);
    context.stroke();
  }
}
