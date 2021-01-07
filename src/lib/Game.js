import { Drawable } from "./Drawable";
import {Map} from './Map';
import {RoomBuilder} from './Rooms';

export class Game extends Drawable {
  constructor(options) {
    super(options);
    this.cursor = {
      x: 0,
      y: 0
    }
    this.map = new Map(this.horizTiles, this.vertTiles);
    this.entities = [];
    this.tiles = []; //tiles will hold the current viewport
    // this.tiles = new Tile();
    this.loadEvents();
    window.requestAnimationFrame(this.start.bind(this));
  }
  getAllTiles(){
    // return this.drawObjects;
    return this.map;
  }
  loadEvents() {
    console.log('loading event listeners');
    this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.canvas.addEventListener('click', this.handleMouseClick.bind(this));
  }
  handleKeyUp(e) {
    console.log(e.keyCode);
  }
  handleMouseMove(event) {
    // console.log('mouse move', event);
    const x = Math.floor((event.x - this.canvas.offsetLeft) / this.options.tileSize);
    const y = Math.floor((event.y - this.canvas.offsetTop) / this.options.tileSize);
    this.cursor.x = x; //i % width
    this.cursor.y = y; //Math.floor(i / width)
  }
  handleMouseClick(event) {
    const tileIndex = this.map.getIndex(this.cursor.x, this.cursor.y, this.horizTiles);
    const tile = this.map.getTile(tileIndex);
    tile.entity.isHighlighted = !tile.entity.isHighlighted;
    console.log(this.map.getTile(tileIndex));
  }
  start(){
    // this.clearViewport();
    // this.drawDebugTiles();
    this.draw(this.map.getMap());
    // this.draw(this.tiles);
    window.requestAnimationFrame(this.start.bind(this));
  }
}

