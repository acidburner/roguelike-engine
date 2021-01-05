import { Drawable } from "./Drawable";

export class Game extends Drawable{
  constructor(options, entities) {
    super(options);
    this.map = [];
    this.entities = entities;
    // this.tiles = new Tile();
    this.loadEvents();
    window.requestAnimationFrame(this.start.bind(this));
  }
  getAllTiles(){
    // return this.drawObjects;
    return this.map;
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
    this.draw(this.entities);
    window.requestAnimationFrame(this.start.bind(this));
  }
}

