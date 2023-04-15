
//init game to load elements, then wait for Keypress to start moving
onload = init;
var playground;
function init(){
    playground = document.getElementById("playground");
    game = new Game();
    document.addEventListener('keydown', keyPressed);
}
function keyPressed(e) {
    if (e.keyCode == 8) // backspace
    window.location = './home.html';
    
    else{
        game.startGame();
    }
}

Game.prototype.startGame = function(e){
    document.getElementById("pause-menu-container").style.visibility = "hidden";
    document.getElementById("startinfo").style.visibility = "hidden";

    document.removeEventListener('keydown', keyPressed);

    document.addEventListener('keydown', this.keyPressedonGame.bind(this));
    this.pacman.startMoving();
    this.startMovingGhosts();
}

function Game(){
    this.pause_on = false;
    this.score = 0;
    this.map = new Map();
    this.pacman = new Pacman();
    this.ghosts = [
        new Ghost('blue-ghost', 7, 8),
        new Ghost('pink-ghost', 9, 8),
        new Ghost('orange-ghost', 8, 8),
        new Ghost('red-ghost', 8, 6)
    ];  
}

Game.prototype.keyPressedonGame = function(e){    
//handle gaming commands
    if(!this.pause_on){     //in game
        if(e.keyCode == 32 || e.keyCode == 27)            
            this.pause(e);
        else{
            this.pacman.changeDirection(e);
        }
    }
    else{                   //in pause
        if(e.keyCode == 32 || e.keyCode == 27)
            this.resume();
        else
            this.handlePauseMenu(e);    //todo
    }
}


//* ------------ PAUSE FUNCTIONS ------------
Game.prototype.pause = function(e){
    this.pause_on = true;

    document.getElementById("pause-menu-container").style.visibility = "visible";
    this.pacman.stopMoving();
    this.stopMovingGhosts();
}
Game.prototype.resume = function(e){
    this.pause_on = false;

    document.getElementById("pause-menu-container").style.visibility = "hidden";

    this.pacman.startMoving();
    this.startMovingGhosts();
}
Game.prototype.startMovingGhosts = function(){
    for (let i = 0; i < this.ghosts.length; i++) {
        this.ghosts[i].startMoving();
    } 
}    
Game.prototype.stopMovingGhosts = function(){
    for (let i = 0; i < this.ghosts.length; i++) {
        this.ghosts[i].stopMoving();
    } 
}    

Game.prototype.handlePauseMenu = function(e){
    console.log("TODO: handle pause menu");
}

//* ------------ POINTS FUNCTIONS ------------
Game.prototype.addPoints = function(type){
    let points = (type == FOOD ) ? FOOD_POINTS : GHOST_POINTS;
    this.score += points;

    points = document.getElementById("score");
    points.textContent = this.score;

    if(type == FOOD){
        this.map.foodElements--;
    }

    if(!this.map.foodElements){
        this.gameOver("win");
    }
    
}


//* ------------ GAME FUNCTIONS ------------
Game.prototype.gameOver = function(type){
    if(type == "win"){
        //todo: win screen
        this.pause();
    }
    else if(type == "lose"){
        //todo: lose screen
        this.pause();
    }
}


Game.prototype.getCell = function(x, y){
    //return cell number if position passed is valid
    if(x < 0 || x >= MAP_DIM || y < 0 || y >= MAP_DIM){
        return null;
    }

    return this.map.cells[y * MAP_DIM + x];
}

Game.prototype.remove = function(type, x, y){
    this.map.cells[y * MAP_DIM + x] = EMPTY;

    //remove food from HTML
    const grid = document.querySelector('.map');
    const cells = grid.querySelectorAll('.cell');
    cells[y * MAP_DIM + x].classList.remove(type);
}

Game.prototype.checkPacmanCollision = function(){
    if(this.pacman.x == this.ghosts[0].x && this.pacman.y == this.ghosts[0].y) return true;
    if(this.pacman.x == this.ghosts[1].x && this.pacman.y == this.ghosts[1].y) return true;
    if(this.pacman.x == this.ghosts[2].x && this.pacman.y == this.ghosts[2].y) return true;
    if(this.pacman.x == this.ghosts[3].x && this.pacman.y == this.ghosts[3].y) return true;
    
    return false;   
}

Game.prototype.GhostVulnerable = function(){
    for(let i = 0; i < this.ghosts.length; i++){
        this.ghosts[i].vulnerable = true;
        const ghost = document.getElementById(this.ghosts[i].id);
        ghost.classList.add('vulnerable');
        ghost.classList.remove(this.ghosts[i].id);
        setTimeout(this.GhostVulnerableOff.bind(this), VULNERABILITY_TIME);
    }
}

Game.prototype.GhostVulnerableOff = function(){
    for(let i = 0; i < this.ghosts.length; i++){
        this.ghosts[i].vulnerable = true;
        const ghost = document.getElementById(this.ghosts[i].id);
        ghost.classList.remove('vulnerable');
        ghost.classList.add(this.ghosts[i].id);
    }
}