class MovableObject extends DrawableObject{
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;
  energy = 100;
  // continueAnimating = true;

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  playAnimation(images) {
    // if(!this.continueAnimating){return;}
    let i = this.currentImage % images.length; // let i = 0 % 6; // i = 0, 1, 2, 3, 4, 5, 0, 1, ...
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x && //rect1.x < rect2.x + rect2.width &&
      this.y + this.height > mo.y && // rect1.x + rect1.width > rect2.x &&
      this.x < mo.x + mo.width && //rect1.y < rect2.y + rect2.height &&
      this.y < mo.y + mo.height //    rect1.y + rect1.height > rect2.y
    );
  }

  hit(){
    this.energy -= 5;
    if(this.energy < 0){
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt(){
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < .5;
  }

  isDead(){
    return this.energy == 0;
  }
}
