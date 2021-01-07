export class Tile {
  constructor(coords, entity) {
    this.coords = coords;
    this.entity = entity;
  }
  getTile(){
    return {
      coords,
      entity
    };
  }
}

