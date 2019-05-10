import Game from '../dist/Game';
import User from '../dist/User';
import ItemCross from '../dist/ItemCross';
import ItemCircle from '../dist/ItemCircle';

const game = new Game();
const cross = new ItemCross();
const circle = new ItemCircle();
const user1 = new User(cross);
const user2 = new User(circle);
game.makeMove(user1, 200, 500); // [x, y] - координата
game.makeMove(user2, 500, 500);
game.makeMove(user1, 100, 100);
game.makeMove(user2, 300, 300);
game.makeMove(user1, 100, 300);

game.getHits();


/* const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/proj/public/`));
app.get('/', (req, res) => {
  res.sendFile('/home/dev/tasks/consolejstask/dist/index.html');
});

var server = app.listen(1337, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('Listening at http://127.0.0.1:1337/');
}); */
