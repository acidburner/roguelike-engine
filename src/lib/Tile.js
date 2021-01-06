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
    return {
      x: this.x,
      y: this.y,
      symbol: this.symbol,
      bg: this.bg,
      fg: this.fg,
      isPassable: this.isPassable,
      isVisible: this.isVisible
    };
  }
}

