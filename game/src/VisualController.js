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

  clickField(x, y){
    const currentUser = this.game.state.currentUser;
    this.game.changeXY(x, y);
    this.field.update(this.game.state.matrix);
    if (this.game.state.currentUser !== 0) this.turnPlayer(this.game.state.currentUser);
    else if (currentUser !== 0) this.win(currentUser);
  }

  clickRestart(){
    this.game.Restart();
    this.field.update(this.game.state.matrix);
    console.log(this.game.state.currentUser);
    this.turnPlayer(this.game.state.currentUser);
  }

  turnPlayer(number) {
    document.getElementById('message').innerText = `Player ${number} turn`;
  }

  win(number) {
    document.getElementById('message').innerText = `Player ${number} is WINNER`;
  }
}
