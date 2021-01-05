import _ from 'lodash';
import {Game} from './lib/Game';
import { GameObject } from './lib/Tile';
import {Player, Monster} from './lib/Player';
import {RoomBuilder} from './lib/Rooms';

const WIDTH = 800;
const HEIGHT = 800;
const TILE_SIZE = 40; //pixels


const player = new Player({ x: 10, y: 10 }, { symbol: '@', bg: 'black', fg: 'goldenrod', isVisible: true, isPassable: false });
const orc = new Monster({ x: 5, y: 10 }, { symbol: 'o', bg: 'black', fg: 'red', isVisible: true, isPassable: false });
const goblin = new Monster({ x: 5, y: 15 }, { symbol: 'g', bg: 'black', fg: 'red', isVisible: true, isPassable: false });
const elf = new Monster({ x: 3, y: 3 }, { symbol: 'e', bg: 'black', fg: 'limegreen', isVisible: true, isPassable: false });


const entities = [player, elf, orc, goblin];

const roomBuilder = new RoomBuilder();
const game = new Game({ width: WIDTH, height: HEIGHT, tileSize: TILE_SIZE }, entities);

let rooms = roomBuilder.makeRoom(0, 0, 20, 20, { symbol: '#', fg: 'green', bg: 'black' }, { symbol: '.', fg: 'green', bg: 'black' });

console.log(rooms);

game.addToMap(roomBuilder.getRooms());
console.log(game);
game.start();
