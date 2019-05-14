export default class VisualLine {
  static draw(context, color, x1, y1, x2, y2) {
    // eslint-disable-next-line no-param-reassign
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }
}
