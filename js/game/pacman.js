

class Pacman{
    constructor(){
        this.x;
        this.y;
        this.nextDirection = null;
        this.direction;
        this.checkDirectionInterval = null;         //?
        this.moveInterval = null;
        this.life;
        this.speed = 30;
        this.element = null;
        this.init();
    }    
}

Pacman.prototype.init = function(){
    this.element = document.createElement("div");
    this.element.setAttribute("id", "pacman");
    this.element.classList.add("movable");
    playground.appendChild(this.element);

    this.initPosition();
    this.element.style.left = (this.x) + "px";
    this.element.style.top = (this.y) + "px";
    this.direction = {x:1, y:0};
    this.nextDirection = {x:1, y:0};
    this.life = MAX_LIFE;
}

Pacman.prototype.initPosition = function(){
    this.x = PACMAN_X * CELL_SIZE;
    this.y = PACMAN_Y * CELL_SIZE;
}

Pacman.prototype.startMoving = function(){
    if (!this.moving) {
        console.log("startMoving");
        this.moveInterval = setInterval(this.movePacman.bind(this), this.speed);
        this.moving = true;
    }
}

Pacman.prototype.stopMoving = function(){
    clearInterval(this.moveInterval);
    this.moving = false;
}

Pacman.prototype.changeDirection = function(e){
    switch(e.keyCode){
        case 37: this.nextDirection.x = -1; this.nextDirection.y = 0; break;    //left
        case 38: this.nextDirection.x = 0; this.nextDirection.y = -1; break;    //top
        case 39: this.nextDirection.x = 1; this.nextDirection.y = 0; break;     //right
        case 40: this.nextDirection.x = 0; this.nextDirection.y = 1; break;     //down
    }
}

Pacman.prototype.PacmanHit = function(){
    this.life -= 1;
    life = document.getElementById("life");
    life.textContent = this.life;

    if(!this.life) 
        game.lose();
        // game.gameOver("lose");

    this.initPosition();
}

Pacman.prototype.movePacman = function(){
    var next = over = null;
    var coord = (this.direction.x == 0) ? this.y : this.x;      //use just the X or Y direction

    //for each new cell check the over cell and the next one
    if(coord % CELL_SIZE == 0){                 
        this.checkDirectionPacman();
        over = checkCell(this);
        next = checkNextCell(this);
    }

    if(over == TUNN){
        tunnel(this);
        return;
    }

    //add points if the element pass over the food      //todo: make a switch
    if(over == BIGF || over == FOOD || over == CRSS){
        game.remove(over, this.x, this.y);
        game.addPoints(FOOD);
        if(over == BIGF){
            game.GhostVulnerable();
        }
    }

    switch(next){
        //Element always move except if it hits the WALL or the SPWAN element
        case SPWN:
        case WALL: break;
        default : moveElement1(this);
    }
}    

Pacman.prototype.checkDirectionPacman = function(){
    this.direction.x = this.nextDirection.x;
    this.direction.y = this.nextDirection.y
}   