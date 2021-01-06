import _ from "lodash";
import { Tile } from "./Tile";

export class RoomBuilder{
  constructor() {
    this.rooms = [];
  }
  getRooms(){
    return this.rooms;
  }

  getRoomAtIndex(index) {
    if( !this.rooms[index]) {
      return false;
    }
    return this.rooms[index];
  }
  getIndex(x,y,width) {
    return x + (width * y);
  }
/**
 * flatRoom - makes a 2d room into an indexable 1d array
 * coords - {x, y} - starting coords of room
 * size - {width, height} - size of rooms
 * tile - {wall, floor} - components of room
 */
  flatRoom(startX, startY, width, height, wall, floor){
    let room = [];
    //attempt at a flattened map
    for( let i = 0; i < height*width; i++) {
      let col = (i % width) + startY;
      let row = Math.floor(i / width) + startX;

      const northBoundry = 0 + startX;
      const southBoundry = height + startX - 1;
      const eastBoundry = 0 + startY;
      const westBoundry = width - 1 + startY;
      // console.log(row, height-1);
      //north wall, south wall, east/west wall
      if (row == northBoundry || row == southBoundry) { //north/south boundaries
        room.push(new Tile(col, row, wall.symbol, wall.bg, wall.fg, true, false));
      }
      else if (col == eastBoundry || col == westBoundry) { //east/west boundary
        room.push(new Tile(col, row, wall.symbol, wall.bg, wall.fg, true, false));
      }
      else { //middle - {1,1}, {1,2}, ... {21,21}
        room.push(new Tile(col, row, floor.symbol, floor.bg, floor.fg, true, true));
      } //middle
    }
    // this.rooms.push({x: startX, y: startY, room});
    this.rooms.push(room);
    return room;
  }

  // makeRoom(startX, startY, width, height, wall, floor){
  //   let room = [];
  //   for(let i = 0; i < height; i++) {
  //     room[i] = [];
  //     for(let j = 0; j < width; j++) {
  //       if (!i || !j || i == height - 1 || j == width - 1) {
  //         room[i][j] = new Tile(startX + j, startY + i, wall.symbol, wall.bg, wall.fg, true, false);
  //       }
  //       else {
  //         room[i][j] = new Tile(startX + j, startY + i, floor.symbol, floor.bg, floor.fg, true, true);
  //       }
  //     }
  //   }
  //   this.rooms.push(room);
  //   return room;
  // }
}

export class Room extends RoomBuilder {
  constructor() {
    super()
  }
}