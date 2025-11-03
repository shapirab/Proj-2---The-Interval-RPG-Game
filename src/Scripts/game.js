import World from "./world.js";

export default class Game {
    constructor(){
        this.world = new World();
    }

    update(deltatime){}

    draw(ctx){
        this.world.drawGrid(ctx);
        this.world.drawCollisionMap(ctx);
    }

}