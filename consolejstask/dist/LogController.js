import Controller from './Controller';

export default class LogController extends Controller {
  static changePlayer(number) {
    console.log(`Player ${number} turn`);
  }

  static win(number) {
    console.log(`Player ${number} is WINNER`);
  }

  static turn() {
    console.log('Set coordinates');
  }

  static matrix(matrix) {
    for (let i = 0; i < 3; i += 1) console.log(`${matrix[i][0]} ${matrix[i][1]} ${matrix[i][2]}`);
    console.log('1 - Player with 0, 2 - Player with x');
  }
}