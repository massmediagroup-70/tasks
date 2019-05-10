class Draw {
  constructor(_context = null, _color = null, _x = null, _y = null) {
    this.context = _context;
    this.color = _color;
    this.x = _x;
    this.y = _y;
    this.setContext = function (contextOption) {
      this.context = contextOption;
    };
    this.getContext = function () {
      return this.context;
    };
    this.setColor = function (colorOption) {
      this.color = colorOption;
    };
    this.getColor = function () {
      return this.color;
    };
    this.setX = function (xOption) {
      this.x = xOption;
    };
    this.getX = function () {
      return this.x;
    };
    this.setY = function (yOption) {
      this.y = yOption;
    };
    this.getY = function () {
      return this.y;
    };
  }
}

class DrawItem extends Draw {
  constructor(_context = null, _color = null, _x = null, _y = null, _size = null) {
    super(_context, _color, _x, _y);
    this.size = _size;
    this.setSize = function (sizeOption) {
      this.size = sizeOption;
    };
    this.getSize = function () {
      return this.size;
    };
  }
}

class DrawCircle extends DrawItem {
  constructor(_context = null, _color = null, _x = null, _y = null, _size = null) {
    super(_context, _color, _x, _y, _size);
  }

  draw() {
    this.context.strokeStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
    this.context.stroke();
  }
}

class DrawLine extends Draw {
  constructor(_context = null, _color = null, _x = null, _y = null, _x2 = null, _y2 = null) {
    super(_context, _color, _x, _y);
    this.x2 = _x2;
    this.y2 = _y2;
    this.setX2 = function (x2Option) {
      this.x2 = x2Option;
    };
    this.getX2 = function () {
      return this.x2;
    };
    this.setY2 = function (y2Option) {
      this.y2 = y2Option;
    };
    this.getY2 = function () {
      return this.y2;
    };
    this.draw();
  }

  draw() {
    this.context.strokeStyle = this.color;
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x2, this.y2);
    this.context.stroke();
  }
}

class DrawCross extends DrawItem {
  constructor(_context = null, _color = null, _x = null, _y = null, _size = null) {
    let line1 = null;
    let line2 = null;
    super(_context, _color, _x, _y, _size);
    this.setLine1 = function (line) {
      line1 = line;
    };
    this.getLine1 = function () {
      return line1;
    };
    this.setLine2 = function (line) {
      line2 = line;
    };
    this.getLine2 = function () {
      return line2;
    };
  }

  draw() {
    this.setLine1(new DrawLine(this.context, this.color, this.x, this.y, this.x
      + this.size, this.y + this.size));
    this.setLine2(new DrawLine(this.context, this.color, this.x
      + this.size, this.y, this.x, this.y + this.size));
  }
}

class DrawSquare extends DrawItem {
  constructor(_context = null, _color = null, _x = null, _y = null, _size = null) {
    super(_context, _color, _x, _y, _size);
    this.draw();
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.rect(this.x, this.y, this.size, this.size);
    this.context.fill();
  }
}


class Controller {
  constructor() {
    this.msg = document.getElementById('message');
  }

  static changePlayer(number) {
    document.getElementById('message').innerText = `Player ${number} turn`;
  }

  static win(number) {
    document.getElementById('message').innerText = `Player ${number} is WINNER`;
  }
}

class Field {
  constructor(_canvas = null) {
    let canvas = _canvas;
    const size = 600;
    canvas.context = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;
    this.setCanvas = function (_canvasOption) {
      canvas = _canvasOption;
      canvas.context = canvas.getContext('2d');
    };
    this.getCanvas = function () {
      return canvas;
    };
    let square = new DrawSquare(canvas.getContext('2d'), 'white', 0, 0, size);
    this.setSquare = function (_squareOption) {
      square = _squareOption;
    };
    this.getSquare = function () {
      return square;
    };
    this.drawNet();
  }

  static returnIndex(coordinate) {
    if (coordinate <= 200) {
      return 0;
    }
    if (coordinate <= 400) {
      return 200;
    } return 400;
  }

  drawNet() {
    const size = this.getCanvas().height;
    let l = new DrawLine(this.getCanvas().context, 'black', 0, size * (1 / 3), size, size * (1 / 3));
    l = new DrawLine(this.getCanvas().context, 'black', 0, size * (2 / 3), size, size * (2 / 3));
    l = new DrawLine(this.getCanvas().context, 'black', size * (1 / 3), 0, size * (1 / 3), size);
    l = new DrawLine(this.getCanvas().context, 'black', size * (2 / 3), 0, size * (2 / 3), size);
  }

  clearField() {
    this.getCanvas().context.clearRect(0, 0, this.getCanvas().width, this.getCanvas().height);
  }

  clickOn(canvas, user1, user2, state, manager) {
    this.getCanvas().onclick = function (event) {
      const canvasBounding = canvas.getBoundingClientRect();
      const x = ((event.clientX - canvasBounding.left) * (canvas.width / canvasBounding.width));
      const y = ((event.clientY - canvasBounding.top) * (canvas.height / canvasBounding.height));
      const xIndex = Field.returnIndex(x);
      const yIndex = Field.returnIndex(y);
      console.log(`${Field.returnIndex(x)} ${Field.returnIndex(y)}`);
      if (state.checkMatrixElement(xIndex / 200, yIndex / 200)) {
        if (state.currentUser === 1) {
          user1.item.setX(xIndex + 100);
          user1.item.setY(yIndex + 100);
          user1.click();
          state.setCurrentUser(2);
          state.setMatrixElement(xIndex / 200, yIndex / 200, 1);
          Controller.changePlayer(2);
          if (state.checkMatrix(xIndex / 200, yIndex / 200)) {
            manager.End(1);
            Controller.win(1);
          }
        } else if (state.currentUser === 2) {
          user2.item.setX(xIndex + 15);
          user2.item.setY(yIndex + 15);
          user2.click();
          state.setCurrentUser(1);
          state.setMatrixElement(xIndex / 200, yIndex / 200, 2);
          Controller.changePlayer(1);
          if (state.checkMatrix(xIndex / 200, yIndex / 200)) {
            manager.End(2);
            Controller.win(2);
          }
        }
      }
    };
  }

  restore(user1, user2, state) {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (state.matrix[i][j] === 1) {
          user1.item.setX(i * 200 + 100);
          user1.item.setY(j * 200 + 100);
          user1.click();
        }
        if (state.matrix[i][j] === 2) {
          user2.item.setX(i * 200 + 15);
          user2.item.setY(j * 200 + 15);
          user2.click();
        }
      }
    }
    Controller.changePlayer(state.currentUser);
  }
}

class User {
  constructor(item) {
    this.item = item;
  }

  click() {
    this.item.draw();
  }
}

class State {
  constructor() {
    this.currentUser = 1;
    this.matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.setCurrentUser = function (userOption) {
      this.currentUser = userOption;
      this.saveInLocalStorage();
      Controller.changePlayer(this.currentUser);
    };
    this.getCurrentUser = function () {
      return this.currentUser;
    };
    this.setMatrixElement = function (x, y, value) {
      this.matrix[x][y] = value;
      this.saveInLocalStorage();
    };
    Controller.changePlayer(this.currentUser);
  }

  saveInLocalStorage() {
    const stateJson = JSON.stringify(this);
    window.localStorage.setItem('state', stateJson);
  }

  checkMatrixElement(x, y) {
    if (this.matrix[x][y] === 0) {
      return true;
    } return false;
  }

  checkMatrix(x, y) {
    let check = true;
    const userItem = this.matrix[x][y];
    for (let i = 0; i < 3; i += 1) {
      if (this.matrix[i][y] === userItem) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if (check) return true;
    for (let i = 0; i < 3; i += 1) {
      if (this.matrix[x][i] === userItem) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if (check) return true;
    for (let i = 0, j = 0; i < 3; i += 1, j += 1) {
      if (i === j && this.matrix[i][j] === userItem) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if (check) return true;
    for (let i = 0, j = 2; i < 3; i += 1, j -= 1) {
      if (this.matrix[i][j] === userItem) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if (check) return true;
    return false;
  }
}

class Manager {
  constructor(_canvas) {
    this.canvas = _canvas;
    this.user1 = null;
    this.user2 = null;
    this.state = null;
    this.setSquare = function (_squareOption) {
      this.square = _squareOption;
    };
    this.getSquare = function () {
      return this.square;
    };
    this.DrawField();
  }

  AddPlayers() {
    this.user1 = new User(new DrawCircle(this.canvas.getContext('2d'), 'black', 0, 0, 170));
    this.user2 = new User(new DrawCross(this.canvas.getContext('2d'), 'black', 0, 0, 170));
  }

  Start() {
    this.AddPlayers();
    this.state = new State();
    const stateObj = JSON.parse(localStorage.getItem('state'));
    if (stateObj != null) {
      this.state.currentUser = stateObj.currentUser;
      this.state.matrix = stateObj.matrix;
      this.field.restore(this.user1, this.user2, this.state);
    }
    this.field.clickOn(this.canvas, this.user1, this.user2, this.state, this);
  }

  DrawField() {
    this.field = new Field(document.getElementById('field'));
  }

  End(winner) {
    console.log(`winner: ${winner}`);
    this.state.currentUser = 0;
  }

  Restart() {
    localStorage.setItem('state', null);
    this.state = null;
    this.field.clearField();
    this.DrawField();
    this.Start();
  }
}

class Game {
  constructor() {
    this.manager = new Manager(document.getElementById('field'));
    this.manager.Start();
    this.button = document.getElementById('restart');
    this.clickOn(this.manager);
  }

  clickOn(manager) {
    this.button.onclick = function () {
      manager.Restart();
    };
  }
}
