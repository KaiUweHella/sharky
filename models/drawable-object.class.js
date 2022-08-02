class DrawableObject {
  x = 120;
  y = 200;
  height = 150;
  width = 100;
  img;
  imageCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    if (this instanceof Character) {
      try {
        ctx.drawImage(
          this.img,
          this.sx,
          this.sy,
          this.sw,
          this.sh,
          this.x,
          this.y,
          this.width,
          this.height
        );
      } catch (e) {
        console.warn("error", e);
        console.log(this.img);
      }
    } else {
      try {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      } catch (e) {
        console.warn("error", e);
        console.log(this.img.src);
      }
    }
  }

  drawFrame(ctx) {
    // if (
    //   this instanceof Character ||
    //   this instanceof JellyFish ||
    //   this instanceof Endboss ||
    //   this instanceof Coins
    // ) {
    //   ctx.beginPath();
    //   ctx.lineWidth = "6";
    //   ctx.strokeStyle = "red";
    //   ctx.rect(this.x, this.y, this.width, this.height);
    //   ctx.stroke();
    // }
  }
}
