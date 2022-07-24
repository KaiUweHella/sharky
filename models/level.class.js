class Level {
    enemies;
    lights;
    backgroundObjects;
    coins;
    level_end_x = 2000;
    level_end_y = 260;

    constructor(enemies, lights, backgroundObjects, coins){
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
    }
}