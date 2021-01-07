// This class maps all drawable data to one consistent viewport.
export class Drawable {
  constructor(options){
    this.options = options;
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
    console.log('xtiles', this.horizTiles, 'ytiles', this.vertTiles);

    //dynamic font size
    this.fixedFontSize = this.getDynamicFontsize();
    //this.context.fontSize = this.getDynamicFontsize() + 'px';
    this.context.font = 'Bold ' + this.fixedFontSize + 'px Helvetica';
  }
  clearViewport(){
    // this.context.clearRect(0, 0, this.options.width, this.options.height);
  }
  getDynamicFontsize(){
    //player perspective width
    let charWidth = Math.ceil(this.context.measureText("@").width);
    // console.log(this.context.measureText("@").width, this.context.measureText("@"));
    // let ratio = this.horizTiles / this.options.width;
    // let ratioToTile = (charWidth / this.options.tileSize);
    // console.log('font to tile ration', ratioToTile);
    let size = Math.ceil(this.options.tileSize * 0.9 );
    // let ratioFraction = ratio * (this.options.tileSize); //ratio * tileSizeHeight / tileSizeWidth
    // let size = Math.floor()
    console.log('calculated font size', size)
    return size;
  }
  draw(tiles) {
    for (let i = 0; i < tiles.length; i++){
      this.drawTile(tiles[i], this.options.tileSize);
    }
  }
  highlightTile(tile, tileSize) {
    this.context.strokeStyle = "red";
    this.context.lineWidth = 2;
    this.context.strokeRect(
      tile.coords.x * tileSize,
      tile.coords.y * tileSize,
      tileSize,
      tileSize
    )
  }
  drawForeground(tile, tileSize) {
    //text will have an offset based on it's width
    const horizontalTextOffset = Math.floor((tileSize - this.context.measureText(tile.entity.symbol).width) / 2);
    this.context.fillStyle = tile.entity.fg;
    this.context.textBaseline = "top";
    //text needs to be offset, as fillText treats the top of the tile as the line placement
    this.context.fillText(
      tile.entity.symbol, //char
      tile.coords.x * tileSize + horizontalTextOffset, //vertical tile location
      tile.coords.y * tileSize, //vertical tile location
      tileSize
    );
  }
  drawBackground(tile, tileSize) {
    this.context.fillStyle = tile.entity.bg;
    this.context.fillRect(
      tile.coords.x * tileSize,
      tile.coords.y * tileSize,
      tileSize,
      tileSize
    );
  }
  drawTile(tile, tileSize) {
    // console.log(tile);
    if (!tile.entity.isVisible){ return; }
    this.drawBackground(tile, tileSize);
    this.drawForeground(tile, tileSize);
    if( tile.entity.isHighlighted ) {
      this.highlightTile( tile, tileSize);
    }
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