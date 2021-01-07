import {Tile} from './Tile';

export class Actor extends Tile {
  constructor(coords, tile) {
    super(coords, tile);
    this.move = new Movement();
    this.viewport = {
      width: 10,
      height: 10
    }
  }
}

export class Monster extends Actor {
  constructor(name, coords, entity) {
    super(coords, entity);
    this.name = name;
  }
  getMonster(){
    return {
      entity: this.getTile(),
      name: this.name
    }
  }
}

export class Player extends Actor {
  constructor(name, coords, entity) {
    super(coords, entity);
    this.name = name;
    this.loadEvents();
  }
  getPlayer(){
    return {
      entity: this.getTile(),
      name: this.name
    }
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
        this.coords.y = this.move.moveNorth(this.coords.y);
        break;
      case 40: case 83: case 98:
        //south
        this.coords.y = this.move.moveSouth(this.coords.y);
        break;
      case 37: case 65: case 100:
        //west
        this.coords.x = this.move.moveWest(this.coords.x);
        break;
      case 39: case 68: case 102:
        //east
        this.coords.x = this.move.moveEast(this.coords.x);
        break;
      default:
        break; // do nothing
    }
    console.log('X:', this.coords.x, "Y:", this.coords.y);
  }
}

export class Movement {
  moveNorth(y) {
    // this.canPlayerMove(--y);
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