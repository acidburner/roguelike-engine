import _ from 'lodash';
import {Game} from './lib/Game';
import { GameObject } from './lib/Tile';
import {Player, Monster} from './lib/Player';
import {RoomBuilder} from './lib/Rooms';

const WIDTH = 800;
const HEIGHT = 800;
const TILE_SIZE = 40; //pixels


const player = new Player('player', { x: 10, y: 10 }, { symbol: '@', bg: 'black', fg: 'goldenrod', isVisible: true, isPassable: false });
const orc = new Monster('orc', { x: 5, y: 10 }, { symbol: 'o', bg: 'black', fg: 'red', isVisible: true, isPassable: false });
const goblin = new Monster('goblin', { x: 15, y: 10 }, { symbol: 'g', bg: 'black', fg: 'red', isVisible: true, isPassable: false });
const elf = new Monster('elf', { x: 10, y: 5 }, { symbol: 'e', bg: 'black', fg: 'limegreen', isVisible: true, isPassable: false });


const entities = [elf, orc, goblin];
entities.push(player); //add player as last entity on list, shows above all other entities //todo z-index to replace this?


const game = new Game({ width: WIDTH, height: HEIGHT, tileSize: TILE_SIZE });


const roomBuilder = new RoomBuilder();
// roomBuilder.makeRoom(0, 0, 20, 20, { symbol: '#', fg: 'green', bg: 'black' }, { symbol: '.', fg: 'green', bg: 'black' });
roomBuilder.flatRoom(0, 0, 20, 20, { symbol: '#', fg: 'green', bg: 'black' }, { symbol: '.', fg: 'green', bg: 'black' });

const rooms = roomBuilder.getRooms();
// console.log(rooms);
game.addToMap(rooms);
// console.log(entities);
game.addToEntities(entities);
// console.log(game);
game.start();
