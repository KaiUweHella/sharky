class Endboss extends MovableObject {
  height = 450;
  width = 450;
  y = -30;
  x = 1400;
  energy = 25;
  playIntro = false;
  nearCharacter = false;
  bubbleHit = false;

  IMAGES_INTRODUCE = [
    "img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
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
  IMAGES_ATTACK = [
    "img/2.Enemy/3 Final Enemy/Attack/1.png",
    "img/2.Enemy/3 Final Enemy/Attack/2.png",
    "img/2.Enemy/3 Final Enemy/Attack/3.png",
    "img/2.Enemy/3 Final Enemy/Attack/4.png",
    "img/2.Enemy/3 Final Enemy/Attack/5.png",
    "img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];
  IMAGES_HURT = [
    "img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  constructor() {
    super().loadImage("../img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImages(this.IMAGES_INTRODUCE);
    this.loadImages(this.IMAGES_REGULAR);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.nearCharacter && !this.playIntro) {
        let introIntervall = setInterval(() => {
          this.playAnimationOnce(this.IMAGES_INTRODUCE, introIntervall);
        }, 200);
        this.playIntro = true;
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isDead()) {
        let deadEndbossIntervall = setInterval(() => {
          this.playAnimationOnce(this.IMAGES_DEAD, deadEndbossIntervall);
        }, 100);
        this.showEndscreen();
      } else if (this.playIntro) {
        this.playAnimation(this.IMAGES_REGULAR);
      }
    }, 200);
  }

  showEndscreen() {
    document.getElementById("win").classList.remove("d-none");
    document.getElementById("restart-button").classList.remove("d-none");
    setTimeout(() => {
      this.world.ctx = null;
    }, 1000);
  }
}
