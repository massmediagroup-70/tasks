import Controller from './Controller';

export default class LogController extends Controller {
  turnPlayer(number) {
    console.log(`Player ${number} turn`);
  }

  win(number) {
    console.log(`Player ${number} is WINNER`);
    this.end();
  }

  end() {
    console.log('End of game!');
  }

  turn() {
    console.log('Set coordinates');
  }

  matrix(matrix) {
    for (let i = 0; i < 3; i += 1) console.log(`${matrix[i][0]} ${matrix[i][1]} ${matrix[i][2]}`);
    console.log('1 - Player with 0, 2 - Player with x');
    console.log(matrix);
  }
}
