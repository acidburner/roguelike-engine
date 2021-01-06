// This class maps all drawable data to one consistent viewport.
export class Drawable {
  constructor(options){
    this._defaults = {
      width: 800,
      height: 600,
      tileSize: 20
    }
    this.options = _.defaultsDeep({}, options, this._defaults);
    console.log('initializing canvas');
    //canvas
    this.canvas = document.getElementById("gameCanvas");
    this.canvas.style.backgroundColor = "#000000";
    //setup canvas size
    this.canvas.width = this.options.width;
    this.canvas.height = this.options.height;
    //canvas context
    this.context = this.canvas.getContext("2d");
    this.horizTiles = Math.floor(this.options.width / this.options.tileSize);
    this.vertTiles = Math.floor(this.options.height / this.options.tileSize);
    console.log(this.horizTiles, this.vertTiles);

    //dynamic font size
    this.fixedFontSize = this.getDynamicFontsize();
    //this.context.fontSize = this.getDynamicFontsize() + 'px';
    this.context.font = 'Bold ' + this.fixedFontSize + 'px Helvetica';
  }
  clearViewport(){
    this.context.clearRect(0, 0, this.options.width, this.options.height);
  }
  getDynamicFontsize(){
    //player perspective width
    let charWidth = Math.ceil(this.context.measureText("@").width);
    console.log(this.context.measureText("@").width, this.context.measureText("@"));
    // let ratio = this.horizTiles / this.options.width;
    let ratioToTile = (charWidth / this.options.tileSize);
    console.log('font to tile ration', ratioToTile);
    let size = Math.ceil(this.options.tileSize * 0.9 );
    // let ratioFraction = ratio * (this.options.tileSize); //ratio * tileSizeHeight / tileSizeWidth
    // let size = Math.floor()
    console.log('calculated font size', size)
    return size;
  }
  // draw(tiles) {
  //   // this.drawDebugTiles();
  //   for (let i = 0; i < tiles.length; i++){
  //     //possibility for full rooms inside tiles, think like z-levels, or floors/portals
  //     if( tiles[i].length) {
  //       this.draw(tiles[i]);
  //     }
  //     //handle entity
  //     this.drawTile(tiles[i], this.options.tileSize);
  //   }
  // }
  draw(tiles) {
    // this.drawDebugTiles();
    for (let i = 0; i < tiles.length; i++){
      //possibility for full rooms inside tiles, think like z-levels, or floors/portals
      if( tiles[i].length) {
        this.draw(tiles[i]);
      }
      //handle entity
      this.drawTile(tiles[i], this.options.tileSize);
    }
  }
  drawTile(tile, tileSize) {
    //console.log(tile);
    if( !tile.isVisible){ return;}
    //text will have an offset based on it's width
    const horizontalTextOffset = Math.floor((tileSize - this.context.measureText(tile.symbol).width) / 2);
    //bg
    this.context.fillStyle = tile.bg;
    this.context.fillRect(
      tile.x * tileSize,
      tile.y * tileSize,
      tileSize,
      tileSize
    );
    //fg
    //fill foreground char
    this.context.fillStyle = tile.fg;
    this.context.textBaseline = "top";
    //text needs to be offset, as fillText treats the top of the tile as the line placement
    this.context.fillText(
      tile.symbol, //char
      tile.x * tileSize + horizontalTextOffset, //vertical tile location
      tile.y * tileSize, //vertical tile location
      tileSize
    );
  }
  drawDebugTiles(){
    for (let i = 0; i < this.vertTiles; i++) {
      for (let j = 0; j < this.horizTiles; j++) {
        this.context.fillStyle = `rgb(${i * 10}, ${j * 10}, 0)`;
        this.context.fillRect(j * this.options.tileSize, i * this.options.tileSize, this.options.tileSize, this.options.tileSize);
      }
    }
  }

}