import Game from './game.js';

export const GAME_WIDTH = window.innerWidth * 0.7;
export const GAME_HEIGHT = window.innerHeight;
export const TILE_SIZE = 64;
export const ROWS = Math.floor(GAME_WIDTH / TILE_SIZE);
export const COLUMNS = Math.floor(GAME_HEIGHT / TILE_SIZE);


window.addEventListener('load', () => {
    const canvas = document.getElementById('main-canvas');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    const ctx = canvas.getContext('2d');

    let game = new Game();

    let lastTime = 0;
    function animate(timeStemp){
        let deltatime = timeStemp - lastTime;
        lastTime = timeStemp;
        requestAnimationFrame(animate);
        game.update(deltatime);
        game.draw(ctx);
    }
    animate(0);
});