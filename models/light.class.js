class Light extends MovableObject {
  y = 0;
  height = 400;
  width = 600;

  constructor() {
    super().loadImage("img/3.Background/Layers/1.Light/COMPLETO.png");

    this.x = Math.random() * 500; //zahl zwischen 200 und 700

    this.animate();
  }

  animate() {
    this.moveLeft();
  }

}
