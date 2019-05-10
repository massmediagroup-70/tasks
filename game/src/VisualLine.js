export default class VisualLine {
  constructor() {
  }

  static draw(context, color, x1, y1, x2, y2) {
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }
}
