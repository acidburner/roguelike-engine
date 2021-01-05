import {Tile} from './Tile';

export class Actor extends Tile {
  constructor(coords, styles) {
    super(coords.x, coords.y, styles.symbol, styles.bg, styles.fg, styles.isVisible, styles.isPassable);
    this.move = new Movement();
    this.viewport = {
      width: 10,
      height: 10
    }
  }

}

export class Player extends Actor {
  constructor(coords, styles) {
    super(coords, styles);
    this.loadEvents();
  }
  getPlayer(){
    return [{
      x: this.x,
      y: this.y,
      symbol: this.symbol,
      bg: this.bg,
      fg: this.fg,
      isPassable: this.isPassable,
      isVisible: this.isVisible
    }]
  }
  loadEvents() {
    console.log('initializing player controls')
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
  }
  handleKeyUp(e) {
    switch (e.keyCode) {
      //[todo] diags
      //cardinal NSEW
      case 38: case 87: case 104:
        //north
        this.y = this.move.moveNorth(this.y);
        break;
      case 40: case 83: case 98:
        //south
        this.y = this.move.moveSouth(this.y);
        break;
      case 37: case 65: case 100:
        //west
        this.x = this.move.moveWest(this.x);
        break;
      case 39: case 68: case 102:
        //east
        this.x = this.move.moveEast(this.x);
        break;
      default:
        break; // do nothing
    }
    console.log('X:', this.x, "Y:", this.y);
  }
}

export class Movement {
  moveNorth(y) {
    return --y;
  }
  moveSouth(y) {
    return ++y;
  }
  moveEast(x) {
    return ++x;
  }
  moveWest(x) {
    return --x;
  }
}