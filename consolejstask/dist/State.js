import LogController from './LogController';

export default class State {
  constructor() {
    this.currentUser = 1;
    this.matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.setCurrentUser = function (userOption) {
      this.currentUser = userOption;
      /* this.saveInLocalStorage();*/
      LogController.changePlayer(this.currentUser);
    };
    this.getCurrentUser = function () {
      return this.currentUser;
    };
    this.setMatrixElement = function (x, y, value) {
      x = this.convertCoordinate(x);
      y = this.convertCoordinate(y);
      this.matrix[x][y] = value;
      /*this.saveInLocalStorage();*/
    };
    this.getMatrixElement = function (x, y) {
      return this.matrix[x][y];
    }
    LogController.changePlayer(this.currentUser);

  }

  returnIndex(coordinate) {
    if (coordinate <= 200) {
      return 0;
    }
    if (coordinate <= 400) {
      return 200;
    } return 400;
  }

  convertCoordinate(x) {
    return this.returnIndex(x) / 200;
  }
  /*
  saveInLocalStorage() {
    const stateJson = JSON.stringify(this);
    window.localStorage.setItem('state', stateJson);
  } */

  checkMatrixElement(x, y) {
    x = this.convertCoordinate(x);
    y = this.convertCoordinate(y);
    if (this.matrix[x][y] === 0) {
      return true;
    } return false;
  }

  changeCurrentUser() {
    if(this.currentUser === 1) this.setCurrentUser(2);
    else this.setCurrentUser(1);
  }

  checkMatrix(x, y) {
    x = this.convertCoordinate(x);
    y = this.convertCoordinate(y);
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
