import ItemCircle from './ItemCircle';

export default class VisualCircle extends ItemCircle {
  constructor() {
    super();
  }

  push(context, color, x, y) {
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x * 200 + 100, y * 200 + 100, 85, 0, 2 * Math.PI);
    context.stroke();
  }

}
