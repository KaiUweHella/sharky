class JellyFish extends MovableObject {
  height = 100;
  width = 70;
  hitBubble = false;

  IMAGES_REGULAR = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];
  IMAGES_BUBBLE_ATTACK = [
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];

  constructor() {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.loadImages(this.IMAGES_REGULAR);
    this.loadImages(this.IMAGES_BUBBLE_ATTACK);

    this.x = 400 + Math.random() * 1000; //zahl zwischen 400 und 1400
    this.speed = 0.15 + Math.random() * 0.25;

    this.y = 0 + Math.random() * 360; //zahl zwischen 0 und 360

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.hitBubble) {
        this.playAnimation(this.IMAGES_BUBBLE_ATTACK);
      } else {
        this.playAnimation(this.IMAGES_REGULAR);
      }
    }, 200);

    this.moveLeft();
  }
  
}
