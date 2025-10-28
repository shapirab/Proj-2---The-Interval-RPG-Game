import { ROWS } from "./app.js";
import { COLUMNS } from "./app.js";
import { TILE_SIZE } from "./app.js";

export default class World {
    constructor(){

    }

    drawGrid(ctx){
        ctx.strockStyle = 'black';
        for(let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLUMNS; col++){
                ctx.strokeRect(row * TILE_SIZE, col * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }
}