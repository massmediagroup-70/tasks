export default class State {
  constructor() {
    const stateObj = JSON.parse(localStorage.getItem('state'));
    if (stateObj != null) {
      this.currentUser = stateObj.currentUser;
      this.matrix = stateObj.matrix;
    } else {
      this.currentUser = 1;
      this.matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      this.saveInLocalStorage();
    }
    this.setCurrentUser = function setCU(userOption) {
      this.currentUser = userOption;
      this.saveInLocalStorage();
    };
    this.getCurrentUser = function getCU() {
      return this.currentUser;
    };
    this.setMatrixElement = function setME(x, y, value) {
      this.matrix[x][y] = value;
      this.saveInLocalStorage();
    };
    this.getMatrixElement = function getME(x, y) {
      return this.matrix[x][y];
    };
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

  changeCurrentUser() {
    if (this.currentUser === 1) this.setCurrentUser(2);
    else this.setCurrentUser(1);
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
