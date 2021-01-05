export class Tile {
  constructor(x, y, symbol, bg, fg, isVisible, isPassable) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
    this.bg = bg;
    this.fg = fg;
    this.isPassable = isPassable;
    this.isVisible = isVisible;
  }
  getTile(){
    return this;
  }
  findIntersect(vertIndex, horizIndex, playerY, playerX){
    //todo somehow map
    // for(let objects in this.objectMap) {
    //   if( objects.room ) {
    //     for( let room in objects.room ) {
    //       if(room.coords.y)
    //     }
    //   }
    // }
    return false;
  }
  getTileAtCoords(index, x,y) {
    console.log('tile coords: ', x, y, 'objectmap', this.objectMap);
    if (!this.objectMap[index] || !this.objectMap[index].room || !this.objectMap[index].room[y] || !this.objectMap[index].room[y][x]) {
      return false;
    }
    else {
      return this.objectMap[index].room[y][x];
    }
  }
}