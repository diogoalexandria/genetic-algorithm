function Robot(){
    this.x = 0;
    this.y = 0;
    this.path=[];    

    this.generateMoviments = function(qtdMoviments) {
        for(i = 0; i < qtdMoviments; i++) {
            this.path.push(Math.ceil(random(0,4)))
        }
    }

    this.getXPosition = function() {
        return this.x;
    }

    this.getYPosition = function() {
        return this.y;
    }

    this.canMoveDown = function(spot) {
        downPosition = spot.getDownPositon();
        
    }
}