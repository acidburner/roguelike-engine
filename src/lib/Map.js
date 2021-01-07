export class Map {
  constructor(width, height) {
    this.map = new Array();
    // this.initializeMap(width, height);
  }
  getIndex(x, y, width) {
    return x + (width * y);
  }
  getTile(index) {
    return this.map[index];
  }
  getMap(){
    return this.map;
  }
  pushTilesToMap(tiles) {
    for(let i = 0; i < tiles.length; i++) {
      this.pushToMap(tiles[i]);
    }
  }
  pushTilesToMapAtIndex(index, tiles) {
    for (let i = 0; i < tiles.length; i++) {
      this.addToMapAtIndex(index, tiles[i]);
      index++;
    }
  }
  pushToMap(obj){
    this.map.push(obj);
  }
  addToMapAtIndex(i, obj) {
    this.map.splice(i, 0, obj);
  }
  removeFromMapAtIndex(i) {
    this.map.splice(i, 1);
  }
  // initializeMap(width, height) {
  //   this.map.from(width*height, (v, i) => {})
  // }
}