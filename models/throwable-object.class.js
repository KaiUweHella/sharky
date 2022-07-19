class ThrowableObject extends MovableObject {
  collidedBubble = false;
  x;

  constructor(x, y) {
    super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    this.x = x + 150;
    this.y = y + 56;
    this.height = 25;
    this.width = 25;
    this.throw();
  }

  throw() {
    if (world.character.otherDirection){
      this.x = this.x - 150;
    }
    setInterval(() => {
      if (world.character.otherDirection) {
        this.x -= 6;
      } else {
        this.x += 6;
      }
    }, 1000 / 60);
  }

  bubbleIsColliding(enemy) {
    return (
      this.x + this.width > enemy.x &&
      this.y + this.height > enemy.y &&
      this.x < enemy.x + enemy.width &&
      this.y < enemy.y + enemy.height
    );
  }
}
