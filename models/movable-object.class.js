class MovableObject {
  x = 120;
  y = 200;
  height = 150;
  width = 100;
  img;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    console.log("moving right");
  }

  moveLeft(){
    setInterval(() => {
        this.x -= this.speed;
    }, 1000 / 60)
  }

  playAnimation(images){
          let i = this.currentImage % images.length; // let i = 0 % 6; // i = 0, 1, 2, 3, 4, 5, 0, 1, ...
          let path = images[i];
          this.img = this.imageCache[path];
          this.currentImage++;
  }
}
