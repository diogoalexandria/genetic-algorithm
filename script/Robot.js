function Robot() {
    this.id;
    this.color = {
        r: random(255).toFixed(),
        g: random(255).toFixed(),
        b: random(255).toFixed()
    };
    this.x = 0;
    this.y = 0;
    this.penalty = false;
    this.fitness;
    this.directions = [];
    this.penalties=0;

    this.generateRandomDirections = function(numberOfMoviments) {
        for(var i = 0; i < numberOfMoviments; i++){
            this.directions[i] = Math.ceil(random(0,6));
        };
    };

    this.getXPosition = function() {
        return this.x;
    };

    this.getYPosition = function() {
        return this.y;
    };

    this.getPenalty = function() {
        return this.penalty;
    };

    this.getEspecificDirection = function(position) {
        return this.directions[position];
    };

    this.canMoveDown = function(spot) {        
        downPosition = spot.getDownPosition();          
        if(downPosition && !downPosition.isWall()) {
            return true;
        } else{
            return false;
        }
    };

    this.moveDown = function() {
        this.y++;
    };

    this.canMoveRight = function(spot) {       
        rightPosition = spot.getRightPosition();
        if(rightPosition && !rightPosition.isWall()) {
            return true;
        } else {
            return false;
        }
    };

    this.moveRight = function() {
        this.x++;
    };

    this.canMoveUp = function(spot) {
        upPosition = spot.getUpPosition();
        if(upPosition && !upPosition.isWall()) {
            return true;
        } else {
            return false;
        }
    };

    this.moveUp = function() {
        this.y--;
    };

    this.canMoveLeft = function(spot) {
        leftPosition = spot.getLeftPosition();        
        if(leftPosition && !leftPosition.isWall()) {
            return true;
        } else {
            return false;
        }
    };

    this.moveLeft = function() {
        this.x--;
    };

    this.calculateFitness = function(target) {
        let score  = 2*(Math.abs(target.x - this.x) + Math.abs(target.y - this.y)) + 2*this.penalties;
        if(this.penalty) {
            this.fitness = score + 2;
        } else {
            this.fitness = score;
        }
        if(target.x == this.x && target.y == this.y) {
            this.fitness = score - 3;
        }
    };

    this.crossover = function(partner) {
        let child = new Robot();
        let midPoint = floor(random(this.directions.length));
        for(let i = 0; i < this.directions.length; i++) {
            if (i < midPoint) child.directions[i] = this.directions[i];
            else child.directions[i] = partner.directions[i];
        };
        return child;
    };

    this.mutate = function(mutationRate) {             
        for(let i = 0; i < this.directions.length; i++){
            // // console.log(direction)
            // this.directions[i] = 1;
            // // console.log(direction)
            if (random(1) < mutationRate) {               
                while(1){
                    let newDirection = Math.ceil(random(0,6));
                    if(newDirection !== direction) {                        
                        this.directions[i] = newDirection;                       
                        break;                    
                    }
                }
            }
        };        
    };
};
