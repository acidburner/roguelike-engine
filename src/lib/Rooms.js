import _ from "lodash";
import { Tile } from "./Tile";


export class Room {
  constructor(name, coords, entity) {
    // super(coords, entity);
    this.name = name;
  }
  getRoom() {
    return {
      room: this.entity,
      name: this.name
    }
  }
}

export class RoomBuilder {
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

/**
 * rectRoom - makes a 2d room into an indexable 1d array
 * coords - {x, y} - starting coords of room
 * size - {width, height} - size of rooms
 * tile - {wall, floor} - components of room
 */
  rectRoom(startX, startY, width, height, wall, floor){
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
        room.push(new Tile({ x: col, y: row }, { symbol: wall.symbol, bg: wall.bg, fg: wall.fg, isVisible: true, isPassable: true }));
      }
      else if (col == eastBoundry || col == westBoundry) { //east/west boundary
        room.push(new Tile({ x: col, y: row }, { symbol: wall.symbol, bg: wall.bg, fg: wall.fg, isVisible: true, isPassable: true }));
      }
      else { //middle - {1,1}, {1,2}, ... {21,21}
        room.push(new Tile({x: col, y:row}, { symbol: floor.symbol, bg: floor.bg, fg: floor.fg, isVisible: true, isPassable: true}));
      } //middle
    }
    // this.rooms.push({x: startX, y: startY, room});
    // this.rooms.push(room);
    return room;
  }
}
