import State from './State';
import LogController from './LogController';

export default class Game {
  constructor(_user1, _user2) {
    this.user1 = _user1;
    this.user2 = _user2;
    this.state = new State();
  }

  makeMove(user, x, y) {
    if (this.state.checkMatrixElement(x, y)) {
      user.move(x, y);
      this.state.setMatrixElement(x, y, user.item.sign);

    }
    if (this.state.checkMatrix(x, y)) {
      LogController.win(user.item.sign);
      this.End();
    }else this.state.changeCurrentUser();
  }

  getHits() {
    LogController.matrix(this.state.matrix);
  }
  /*
  Start() {

    /!* const stateObj = JSON.parse(localStorage.getItem('state'));
    if (stateObj != null) {
      this.state.currentUser = stateObj.currentUser;
      this.state.matrix = stateObj.matrix;
      this.field.restore(this.user1, this.user2, this.state);
    } *!/
    this.field.clickOn(this.canvas, this.user1, this.user2, this.state, this);
  } */


  /* DrawField() {
    this.field = new Field(document.getElementById('field'));
  } */

  End() {
    this.state.currentUser = 0;
  }

  /*  Restart() {
      /!* localStorage.setItem('state', null); *!/
      this.state = null;
      /!* this.field.clearField();
      this.DrawField(); *!/
      this.Start();
    } */
}
