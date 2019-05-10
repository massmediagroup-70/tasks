import Game from './Game';
import User from './User';
import VisualController from './VisualController';
import LogController from './LogController';
import ItemCross from './ItemCross';
import ItemCircle from './ItemCircle';
import css from './css/style.css';

const cross = new ItemCross();
const circle = new ItemCircle();
const user1 = new User(circle);
const user2 = new User(cross);
const game = new Game(user1, user2);

const VC = new VisualController(game);
