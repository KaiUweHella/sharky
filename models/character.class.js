class Character extends MovableObject {
  sx = 60;
  sy = 420;
  sw = 630;
  sh = 400;
  height = this.sh / 4;
  width = this.sw / 4;
  speed = 5;
  y = 200;
  lastBubble = 0;
  IMAGES_ATTACK_BUBBLE = [
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];
  IMAGES_DEAD_POISON = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMAGES_POISON_HURT = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];
  // IMAGES_ATTACK = [
  //   'img/1.Sharkie/4.Attack/Fin slap/1.png',
  //   'img/1.Sharkie/4.Attack/Fin slap/2.png',
  //   'img/1.Sharkie/4.Attack/Fin slap/3.png',
  //   'img/1.Sharkie/4.Attack/Fin slap/4.png',
  //   'img/1.Sharkie/4.Attack/Fin slap/5.png',
  //   'img/1.Sharkie/4.Attack/Fin slap/6.png',
  //   'img/1.Sharkie/4.Attack/Fin slap/7.png',
  //   'img/1.Sharkie/4.Attack/Fin slap/8.png'
  // ];
  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];
  IMAGES_SWIM = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];
  world;
  swim_sound = new Audio("audio/swimming.mp3");

  constructor() {
    super().loadImage("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_ATTACK_BUBBLE);
    this.loadImages(this.IMAGES_DEAD_POISON);
    this.loadImages(this.IMAGES_POISON_HURT);

    this.animate();
  }

  animate() {
    this.Animation_Swim = setInterval(() => {
      if (this.x == 1100) {
        this.atEndboss = true;
      }
      this.swim_sound.volume = 0.8;
      this.swim_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.swim_sound.play();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.swim_sound.play();
      }
      if (this.world.keyboard.UP && this.y > 0) {
        this.y -= this.speed;
        this.swim_sound.play();
      }
      if (this.world.keyboard.DOWN && this.y < 400) {
        this.y += this.speed;
        this.swim_sound.play();
      }
      this.world.camera_x = -this.x + 50;
    }, 1000 / 60);

    this.Animation_Attack = setInterval(() => {
      if (this.world.keyboard.SPACE && this.world.coinBar.coinCounter >= 1) {
        let attackInterval = setInterval(() => {
          this.playAnimationOnce(
            this.IMAGES_ATTACK_BUBBLE,
            attackInterval
          );
        }, 100);
        this.checkThrowObjects();
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_POISON_HURT);
      } else if (this.isDead()) {
        if (this.sy == 420) {
          this.isDeadOutcut();
        }
        let deadAnimationInterval = setInterval(() => {
          this.playAnimationOnce(
            this.IMAGES_DEAD_POISON,
            deadAnimationInterval
          );
        }, 100);
      } else if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN
      ) {
        this.playAnimation(this.IMAGES_SWIM);
      } else {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 100);
  }

  isDeadOutcut() {
    let a = 200;
    let b = 360;
    this.sy = this.sy - a;
    this.sh = this.sh + b;
    this.height = this.height + b / 4;
    this.y = this.y - a / 4;
  }

  attackOutcut() {
    let a = 80;
    let b = 60;
    let c = 80;
    this.sy = this.sy - a;
    this.sh = this.sh + b;
    this.height = this.height + b / 4;
    this.y = this.y - a / 4;
    this.sw = this.sw + c;
    this.width = this.width + c / 4;
  }

  normalOutCut() {
    let a = 80;
    let b = 60;
    let c = 80;
    this.sy = this.sy + a;
    this.sh = this.sh - b;
    this.height = this.height - b / 4;
    this.y = this.y + a / 4;
    this.sw = this.sw - c;
    this.width = this.width - c / 4;
  }
}
