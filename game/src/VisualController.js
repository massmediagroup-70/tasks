import Controller from './Controller';
import VisualField from './VisualField';

export default class VisualController extends Controller {
  constructor(game) {
    super(game);
    this.field = new VisualField(document.getElementById('field'));
    this.button = document.getElementById('restart');
    this.msg = document.getElementById('message');

    this.turnPlayer(this.game.state.currentUser);
    this.field.update(this.game.state.matrix);

    this.field.clickListener(this.field.canvas, this);
    this.field.buttonRestartListener(this.button, this);
  }

  clickField(x, y) {
    const { currentUser } = this.game.state;
    this.game.changeXY(x, y);
    this.field.update(this.game.state.matrix);
    if (this.game.state.currentUser !== 0) this.turnPlayer(this.game.state.currentUser);
    else if (currentUser !== 0) this.win(currentUser);
  }

  clickRestart() {
    this.game.Restart();
    this.field.update(this.game.state.matrix);
    this.turnPlayer(this.game.state.currentUser);
  }

  // eslint-disable-next-line class-methods-use-this
  turnPlayer(number) {
    document.getElementById('message').innerText = `Player ${number} turn`;
  }

  // eslint-disable-next-line class-methods-use-this
  win(number) {
    document.getElementById('message').innerText = `Player ${number} is WINNER`;
  }

  // eslint-disable-next-line class-methods-use-this
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
}
