import _ from 'lodash';
import {Game} from './lib/Game';
import { GameObject } from './lib/Tile';
import {Player} from './lib/Player';
import {RoomBuilder} from './lib/Rooms';

const WIDTH = 800;
const HEIGHT = 800;
const TILE_SIZE = 40; //pixels


const player = new Player({ x: 10, y: 10 }, { symbol: '@', bg: 'black', fg: 'goldenrod', isVisible: true, isPassable: false });
const roomBuilder = new RoomBuilder();
const game = new Game({width: WIDTH, height:HEIGHT, tileSize: TILE_SIZE}, player);

let rooms = roomBuilder.makeRoom(0, 0, 20, 20, { symbol: '#', fg: 'green', bg: 'black' }, { symbol: '.', fg: 'green', bg: 'black' });

console.log(rooms);

game.addToMap(roomBuilder.getRooms());
console.log(game);
game.start();
