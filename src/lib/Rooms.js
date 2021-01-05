import _ from "lodash";
import { Tile } from "./Tile";

const TILE = {
  type: '',
  symbol: '',
  fg: '',
  bg: '',
  isVisible: false,
  isPassable: true
}

export class RoomBuilder{
  constructor() {
    this.rooms = [];
  }
  getRooms(){
    return this.rooms;
  }
  /**
   * coords - {x, y} - starting coords of room
   * size - {width, height} - size of rooms
   * tile - {wall, floor} - components of room
   */
  getRoomAtIndex(index) {
    if( !this.rooms[index]) {
      return false;
    }
    return this.rooms[index];
  }
  makeRoom(startX, startY, width, height, wall, floor){
    let room = [];
    for(let i = 0; i < height; i++) {
      room[i] = [];
      for(let j = 0; j < width; j++) {
        if (!i || !j || i == height - 1 || j == width - 1) {
          room[i][j] = new Tile(startY + i, startX + j, wall.symbol, wall.bg, wall.fg, true, false);
        }
        else {
          room[i][j] = new Tile(startY + i, startX + j, floor.symbol, floor.bg, floor.fg, true, true);
        }
      }
    }
    this.rooms.push(room);
    return room;
  }
  /* mapRoom(x,y,width,height,wallTile,floorTile) {
    let map = {coords:{x,y}, room: [] };
    for(let i = 0; i < height; i++) {
      map.room[i] = [];
      for(let j = 0; j < width; j++) {
        //wall
        if( !i || !j || i == height-1 || j == width-1 ){
          // map.room[i][j] = new Tile(
          map.room[i][j] = { symbol: wallTile.symbol, fg: wallTile.fg, bg: wallTile.bg, isPassable: wallTile.isPassable, isVisible: true };
        }
        // floor
        else {
          map.room[i][j] = { symbol: floorTile.symbol, fg: floorTile.fg, bg: floorTile.bg, isPassable: floorTile.isPassable, isVisible: true};
        }
      }
    }
    return map;
  } */
}