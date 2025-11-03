import { ROWS } from "./app.js";
import { COLUMNS } from "./app.js";
import { TILE_SIZE } from "./app.js";

export default class World {
    constructor(){
        this.collision = [];
        this.createEmptyCollision();
        this.level_1 = this.addLevelNoteMap(5, 2);
    }

    createEmptyCollision(){
        for(let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLUMNS; col++){
                this.collision.push(0);
            }
        }
    }

    addLevelNoteMap(notesInMap, paths){
        let startRow = ROWS - 1;
        let startCol = Math.floor(COLUMNS / 2);

        for(let p = 0; p < paths; p++){
            let row = startRow;
            let col = startCol;
    
            for(let i = 0; i < notesInMap; i++){        
                if (row >= 0 && col < COLUMNS) {
                    const index = row * COLUMNS + col;              
                    this.collision[index] = 1;
                }
                row--;
                let direction = Math.random() < 0.5 ? 1 : -1;
                let nextCol = col + direction;

                if (nextCol >= 0 && nextCol < COLUMNS){
                    let nextIndex = row * COLUMNS + nextCol;
                    if (this.collision[nextIndex] === 0) {
                        col = nextCol; // safe to move
                    } else {
                    // try the opposite direction
                        let altCol = col - direction;
                        if (altCol >= 0 && altCol < COLUMNS) {
                            const altIndex = row * COLUMNS + altCol;
                            if (this.collision[altIndex] === 0) {
                                col = altCol;
                            }
                            // else: stuck, stay in same column
                        }
                    }
                }
            }
        }
    }

     getTile(array, row, col){
        return array[COLUMNS * row + col];
    }

    drawGrid(ctx){
        ctx.strokeStyle = 'black';
        for(let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLUMNS; col++){
                ctx.strokeRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }

    drawCollisionMap(ctx){
        ctx.fillStyle = 'rgba(255,0,0,0.8)';
        for(let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLUMNS; col++){
                if(this.getTile(this.collision, row, col) === 1){
                    ctx.fillRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);

                }
            }
        }
    }
}