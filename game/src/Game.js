import State from './State';

export default class Game {
  constructor(_user1, _user2) {
    this.user1 = _user1;
    this.user2 = _user2;
    this.state = new State();
  }

  makeMove(user, x, y) {
    x = this.convertCoordinate(x);
    y = this.convertCoordinate(y);
    if (this.state.checkMatrixElement(x, y)) {
      user.move(x, y);
      this.state.setMatrixElement(x, y, user.item.sign);
      this.state.changeCurrentUser();
    }
    if (this.state.checkMatrix(x, y)) {
      this.End();
    }
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

  changeXY(x, y) {
    let user = null;
    if (this.state.currentUser === 1) user = this.user1;
    else user = this.user2;
    if (this.state.currentUser !== 0) this.makeMove(user, x, y);
  }

  End() {
    this.state.setCurrentUser(0);
  }

  Restart() {
    localStorage.setItem('state', null);
    this.state = null;
    this.state = new State();
    this.state.setCurrentUser(this.user1.item.sign);
  }
}
