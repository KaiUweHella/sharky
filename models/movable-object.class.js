class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;
  currentImageOnce = 0;
  currentImageAttack = 0;

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 0 % 6; // i = 0, 1, 2, 3, 4, 5, 0, 1, ...
    let path = images[i];

    this.img = this.imageCache[path];

    this.currentImage++;
  }

  playAnimationOnce(images, interval, secIntervall) {
    let i = this.currentImageOnce % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImageOnce++;

    if (this.currentImageOnce > images.length - 1) {
      clearInterval(interval);
      clearInterval(secIntervall);
    }
  }

  isColliding(mo) {
    return (
      this.x + this.width - 20 > mo.x &&
      this.y + this.height - 10 > mo.y &&
      this.x + 20 < mo.x + mo.width &&
      this.y + 10 < mo.y + mo.height
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
    setTimeout(() => {
      let bubble = new ThrowableObject(
        this.world.character.x,
        this.world.character.y
      );
      this.world.throwableObjects.push(bubble);
    }, 400);

    this.world.coinBar.coinCounter--;
    this.world.coinBar.setCounter(this.world.coinBar.coinCounter);
  }
}
