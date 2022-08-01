class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;


    constructor(){
        this.keyEvents();
    }

    keyEvents(){
        document.getElementById('key-up').addEventListener('touchstart', (e) => {
            this.UP = true;
        } )
        document.getElementById('key-up').addEventListener('touchend', (e) => {
            this.UP = false;
        } )
        document.getElementById('key-down').addEventListener('touchstart', (e) => {
            this.DOWN = true;
        } )
        document.getElementById('key-down').addEventListener('touchend', (e) => {
            this.DOWN = false;
        } )
        document.getElementById('key-left').addEventListener('touchstart', (e) => {
            this.LEFT = true;
        } )
        document.getElementById('key-left').addEventListener('touchend', (e) => {
            this.LEFT = false;
        } )
        document.getElementById('key-right').addEventListener('touchstart', (e) => {
            this.RIGHT = true;
        } )
        document.getElementById('key-right').addEventListener('touchend', (e) => {
            this.RIGHT = false;
        } )
        document.getElementById('key-space').addEventListener('touchstart', (e) => {
            this.SPACE = true;
        } )
        document.getElementById('key-space').addEventListener('touchend', (e) => {
            this.SPACE = false;
        } )
    }
}