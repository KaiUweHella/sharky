class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;
  energy = 100;

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 0 % 6; // i = 0, 1, 2, 3, 4, 5, 0, 1, ...
    let path = images[i];
    let lastImg = images.length - 1;

    this.img = this.imageCache[path];

    if (this.isDead() && this.currentImage >= lastImg) {
      this.currentImage = lastImg;
    } else {
      this.currentImage++;
    }
  }

  playAnimationOnce(images, interval) {
    let i = this.currentImage % images.length; // let i = 0 % 6; // i = 0, 1, 2, 3, 4, 5, 0, 1, ...
    let path = images[i];
    let lastImg = images.length - 1;

    this.img = this.imageCache[path];

    if (this.currentImage >= lastImg) {
      clearInterval(interval);
    } else {
      this.currentImage++;
    }
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x + mo.width &&
      this.y < mo.y + mo.height
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  isDead() {
    return this.energy == 0;
  }

  checkThrowObjects() {
    if (this.world.keyboard.SPACE) {
      setTimeout(() => {
        let bubble = new ThrowableObject(
          this.world.character.x,
          this.world.character.y
        );
        this.world.throwableObjects.push(bubble);
      }, 700);
    }
    this.world.coinBar.coinCounter--;
    this.world.coinBar.setCounter(this.world.coinBar.coinCounter);
  }
}
