import Game from './Game';
import User from './User';
import VisualController from './VisualController';
import ItemCross from './ItemCross';
import ItemCircle from './ItemCircle';

const cross = new ItemCross();
const circle = new ItemCircle();
const user1 = new User(circle);
const user2 = new User(cross);
const game = new Game(user1, user2);

// eslint-disable-next-line no-unused-vars
const VC = new VisualController(game);
