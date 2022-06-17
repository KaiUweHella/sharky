class Endboss extends MovableObject {
  height = 450;
  width = 450;
  y = -30;

  IMAGES_REGULAR = [
    "img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  constructor() {
    super().loadImage("../img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImages(this.IMAGES_REGULAR);
    this.x = 1400;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_REGULAR);
    }, 200);
  }
}
