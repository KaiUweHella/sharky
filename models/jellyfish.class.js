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

    this.x = 400 + Math.random() * 1000; //zahl zwischen 200 und 700
    this.speed = 0.15 + Math.random() * 0.25;

    this.y = 0 + Math.random() * 460; //zahl zwischen 200 und 700

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_REGULAR);
    }, 200);

    this.moveLeft();
  }
}
