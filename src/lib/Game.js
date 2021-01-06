import { Drawable } from "./Drawable";

export class Game extends Drawable {
  constructor(options) {
    super(options);
    this.map = [];
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
  addToMap(objects){
    this.map.push(objects);
  }
  removeFromMap(index){
    this.map = this.map.splice(index, 1);
  }
  addToEntities(objects){
    this.entities.push(objects);
  }
  removeFromEntities(index){
    this.entities = this.entities.splice(index, 1);
  }
  loadEvents() {
    console.log('adding objects to map');
  }
  handleKeyUp(e) {
    console.log(e.keyCode);
  }
  start(){
    this.clearViewport();
    this.draw(this.map);
    this.draw(this.entities);
    // this.draw(this.tiles);
    window.requestAnimationFrame(this.start.bind(this));
  }
}

