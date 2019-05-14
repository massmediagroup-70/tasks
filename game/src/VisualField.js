import VisualLine from './VisualLine';
import VisualCross from './VisualCross';
import VisualCircle from './VisualCircle';

export default class VisualField {
  constructor(_canvas = null) {
    const size = 600;

    this.canvas = _canvas;
    this.canvas.context = this.canvas.getContext('2d');
    this.canvas.width = size;
    this.canvas.height = size;

    this.setCanvas = function setC(_canvasOption) {
      this.canvas = _canvasOption;
      this.canvas.context = this.canvas.getContext('2d');
    };

    this.getCanvas = function getC() {
      return this.canvas;
    };

    this.getContext = function getCo() {
      return this.canvas.context;
    };

    this.drawField('white', 0, 0);
    this.drawNet('black');
  }

  drawField(color, x, y) {
    this.canvas.getContext('2d').fillStyle = color;
    this.canvas.context.rect(x, y, this.size, this.size);
    this.canvas.context.fill();
  }

  drawNet(color) {
    const size = this.getCanvas().height;
    VisualLine.draw(this.getCanvas().context, color, 0, size * (1 / 3), size, size * (1 / 3));
    VisualLine.draw(this.getCanvas().context, color, 0, size * (2 / 3), size, size * (2 / 3));
    VisualLine.draw(this.getCanvas().context, color, size * (1 / 3), 0, size * (1 / 3), size);
    VisualLine.draw(this.getCanvas().context, color, size * (2 / 3), 0, size * (2 / 3), size);
  }

  drawCircle(color, x, y) {
    const circle = new VisualCircle();
    circle.push(this.canvas.context, color, x, y);
  }

  drawCross(color, x, y) {
    const cross = new VisualCross();
    cross.push(this.canvas.context, color, x, y);
  }

  clickListener(canvas = this.canvas, control) {
    this.getCanvas().onclick = function Click(event) {
      const canvasBounding = canvas.getBoundingClientRect();
      const x1 = ((event.clientX - canvasBounding.left) * (canvas.width / canvasBounding.width));
      const y1 = ((event.clientY - canvasBounding.top) * (canvas.height / canvasBounding.height));
      const x = control.convertCoordinate(x1);
      const y = control.convertCoordinate(y1);
      control.clickField(x, y);
    };
  }

  // eslint-disable-next-line class-methods-use-this
  buttonRestartListener(button, control) {
    // eslint-disable-next-line no-param-reassign
    button.onclick = function Click() {
      control.clickRestart();
    };
  }

  clearRect(i, j) {
    this.canvas.context.clearRect(i * 200 + 1, j * 200 + 1, 198, 198);
  }

  update(matrix) {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (matrix[i][j] === 1) {
          this.drawCircle('black', i, j);
        }
        if (matrix[i][j] === 2) {
          this.drawCross('black', i, j);
        }
        if (matrix[i][j] === 0) {
          this.clearRect(i, j);
        }
      }
    }
  }
}
