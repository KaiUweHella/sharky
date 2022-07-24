class CoinBar extends DrawableObject{
    IMAGES = [
        'img/4. Marcadores/green/Coin/0_  copia 4.png',
        'img/4. Marcadores/green/Coin/20_  copia 2.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ];
    coinCounter = 0;

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 40;
        this.width = 200;
        this.height = 60
        this.setCounter(0);
    }

    setCounter(coinCounter){
        this.coinCounter = coinCounter;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if(this.coinCounter >= 10){
            return 5
        }
        else if(this.coinCounter >= 8){
            return 4
        }
        else if(this.coinCounter >= 6){
            return 3
        }
        else if(this.coinCounter >= 4){
            return 2
        }
        else if(this.coinCounter >= 2){
            return 1
        }
        else{
            return 0
        }
    }
}