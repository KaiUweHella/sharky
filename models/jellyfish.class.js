class JellyFish extends MovableObject {
  height = 80;
  width = 80;
  
  IMAGES_REGULAR = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];

  constructor() {
    super().loadImage("../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.loadImages(this.IMAGES_REGULAR);

    this.x = 200 + Math.random() * 500; //zahl zwischen 200 und 700
    this.speed = 0.15 + Math.random() * 0.25;

    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_REGULAR.length; // let i = 0 % 6; // i = 0, 1, 2, 3, 4, 5, 0, 1, ...
      let path = this.IMAGES_REGULAR[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 200);

    this.moveLeft();
  }
}
