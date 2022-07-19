class ThrowableObject extends MovableObject {
  constructor(x, y, width, height) {
    super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    this.x = x + width;
    this.y = y + height / 3;
    console.log(this.width);
    this.height = 40;
    this.width = 40;
    this.throw();
  }

  throw() {
    setInterval(() => {
      this.x += 10;
    }, 1000 / 60);
  }
}
