class Level {
    enemies;
    lights;
    backgroundObjects;
    level_end_x = 2000;
    level_end_y = 260;

    constructor(enemies, lights, backgroundObjects){
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
    }
}