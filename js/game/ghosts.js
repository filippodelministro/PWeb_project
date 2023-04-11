class Ghost {
    constructor(name, x, y) {
        this.id = name;
        this.element = document.getElementById(this.id);
      
        this.x = x;
        this.y = y;
        this.moving = false;
        this.direction;
        this.speed = 200;
        this.initPosition();
    }
}


Ghost.prototype.initPosition = function(){
    this.element.style.left = (this.x * CELL_SIZE) + "px";
    this.element.style.top = (this.y * CELL_SIZE) + "px";
    this.moving = false;
    this.changeDirection();
}
Ghost.prototype.startMoving = function(){
    if (!this.moving) {
        //fix: need implementation to make them more "smart"
        this.moveInterval = setInterval(this.moveGhost.bind(this), this.speed);
        this.moving = true;
        console.log("startMoving: " + this.moving);

    }
}
Ghost.prototype.stopMoving = function(){
    clearInterval(this.moveInterval);
    this.moving = false;
}



Ghost.prototype.moveGhost = function(){
    
    //check if the ghost is the spawn:
    let on = game.getCell(this.x, this.y);
    if(on == SPWN){
        this.leaveSpawn();

        // return;
    }

    if(on == CRSS){
        this.randomDirection();
        // return;
    }

    
    let posX = this.x;
    let posY = this.y;
    switch(this.direction){
        case LEFT : posX -= 1; break;
        case UP : posY -= 1; break;
        case RIGHT : posX += 1; break;
        case DOWN : posY += 1; break;
    }

    let next = game.getCell(posX, posY);

    switch(next){
        case WALL: {
            this.changeDirection(); 
            break;
        }
        case TUNN: {
            console.log("tunnel");
            if(this.x == 1)
                this.x = MAP_DIM - 1;
            else this.x = 0;
            moveElement(this, this.x, this.y);
            break;
        }
        case SPWN:{
            this.changeDirection();
            break;
        }
        case null: {    //map's border 
            this.randomDirection(); 
            break;
        }
        default:{
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
        } 
    }   
}    

Ghost.prototype.randomDirection = function(direction){
    const randomIndex = Math.floor(Math.random() * 10); 
    if(randomIndex < 4)         //30% to change direction
        this.changeDirection();
}

Ghost.prototype.changeDirection = function(){
    const directions = [UP, DOWN, RIGHT, LEFT];
    const randomIndex = Math.floor(Math.random() * 4); 
    this.direction = directions[randomIndex];
}

Ghost.prototype.leaveSpawn = function(){

    moveElement(this, this.x, this.y - 1);
    moveElement(this, this.x, this.y - 1);
    this.randomDirection();
}