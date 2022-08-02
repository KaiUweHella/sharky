class Coins extends DrawableObject {
  height = 40;
  width = 40;
  posY = 0;
  changeDirection = false;
  collidedCharacter = false;

  IMAGES_COIN = ["img/4.Marcadores/Coins/1.png"];

  constructor() {
    super().loadImage("img/4.Marcadores/Coins/1.png");
    this.loadImages(this.IMAGES_COIN);

    this.x = 400 + Math.random() * 1000; //zahl zwischen 400 und 1400

    this.y = 0 + Math.random() * 360; //zahl zwischen 0 und 360

    this.animateCoin();
  }

  animateCoin() {
    setInterval(() => {
      if (!this.changeDirection) {
        this.posY++;
        this.y += 1;
        if (this.posY == 10){
            this.changeDirection = true;
          }
      }
      if (this.changeDirection) {
        this.posY--;
        this.y -= 1;
        if (this.posY == 0){
            this.changeDirection = false;
          }
      }
    }, 1000 / 24);
  }
}
