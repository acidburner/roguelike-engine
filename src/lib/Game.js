import { Drawable } from "./Drawable";

export class Game extends Drawable{
  constructor(options, player) {
    super(options);
    this.map = [];
    this.player = player;
    // this.tiles = new Tile();
    this.loadEvents();
    window.requestAnimationFrame(this.start.bind(this));
  }
  getAllTiles(){
    // return this.drawObjects;
  }
  addToMap(objects){
    this.map.push(objects);
  }
  removeFromMap(index){
    this.map = this.map.splice(index, 1);
  }
  loadEvents() {
    console.log('adding objects to map');
  }
  handleKeyUp(e) {
    console.log(e.keyCode);
  }
  start(){
    this.clearMap();
    this.draw(this.map);
    this.draw([this.player.getPlayer()]);
    window.requestAnimationFrame(this.start.bind(this));
  }
}

