class JellyFish extends MovableObject {

    height = 80;
    width = 80;

    constructor(){
        super().loadImage('../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');

        this.x = 200 + Math.random() * 500; //zahl zwischen 200 und 700
    }
}