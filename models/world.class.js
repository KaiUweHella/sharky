class World {
  character = new Character();
  level = level_1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  throwableObjects = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.swim();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.lights);
    this.addObjectsToMap(this.throwableObjects);

    this.ctx.translate(-this.camera_x, 0);
    // space for fixed objects
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);

    //draw wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  swim() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy.hitBubble) {
          return;
        } else {
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      }
    });

    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin) && !coin.collidedCharacter) {
        this.coinBar.coinCounter++;
        coin.collidedCharacter = true;
        this.coinBar.setCounter(this.coinBar.coinCounter);
        this.deletCoin(coin);
        console.log(this.coinBar.coinCounter);
      }
    });

    this.throwableObjects.forEach((bubble) => {
      this.level.enemies.forEach((enemy) => {
        if (bubble.isColliding(enemy) && !bubble.collidedEnemy) {
          bubble.collidedEnemy = true;
          enemy.hitBubble = true;
        }
      });
    });
  }

  deletCoin(coin) {
    let indexCurrentCoin = this.level.coins.indexOf(coin); // get index of the coin that was hit
    this.level.coins.splice(indexCurrentCoin, 1); // splice coin from array of coins
  }

  checkThrowObjects() {
    if (this.keyboard.SPACE) {
      setTimeout(() => {
        let bubble = new ThrowableObject(this.character.x, this.character.y);
        this.throwableObjects.push(bubble);
      }, 700);
    }
  }
}
