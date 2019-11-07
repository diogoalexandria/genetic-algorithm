function Robot() {
    this.id;
    this.x = 0;
    this.y = 0;
    this.penalty = false;
    this.fitness;
    this.directions = [];

    this.generateRandomDirections = function(numberOfMoviments) {
        for(var i = 0; i < numberOfMoviments; i++){
            this.directions[i] = Math.ceil(random(0,4));
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
        let score  = Math.abs(target.x - this.x) + Math.abs(target.y - this.y);
        this.fitness = score;
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
        directions.forEach(direction => {
            if (random(1) < mutationRate) {
                
            }
        });
    }
}