function Spot(i, j, widthSpotArena, heightSpotArena) {
    this.x = i;
    this.y = j;    
    this.wall = false;       

    if (random(1) < 0.1) {
        this.wall = true;
    }

    this.show = function (color) {
        fill(color);
        if (this.wall) {
            fill(0);
        }
        // noStroke();           
        rect(this.x * widthSpotArena, this.y * heightSpotArena, widthSpotArena, heightSpotArena);
    }    

    this.getDownPosition = function() {       
        if (this.y + 1 < rows) {           
            let downPosition = grid.getSpot(this.x, this.y + 1);            
            return downPosition;
        } else {
            return null;
        }        
    }
    this.getRightPosition = function() {
        if (this.x + 1 < columns) {            
            let rightPosition = grid.getSpot(this.x + 1, this.y);            
            return rightPosition;
        } else {
            return null;
        }        
    }
    this.getUpPosition = function() {
        if (this.y - 1 >= 0) {            
            let upPosition = grid.getSpot(this.x, this.y - 1);                    
            return upPosition;
        } else {
            return null;
        }        
    }
    this.getLeftPosition = function() {
        if (this.x - 1 >= 0) {            
            let leftPosition = grid.getSpot(this.x - 1, this.y);            
            return leftPosition;
        } else {
            return null;
        }             
    }    
    
    this.isAvailable = function(position) {
        if (position && !position.visited && !position.wall) {
            return true;
        } else {
            return false;
        }
    }

    this.isWall = function() {
        if (this.wall) {
            return true;        
        } else {
            return false
        }
    }

    // this.isWall = function(position) {
    //     if (position && position.wall) {
    //         return true;
    //     } else if(!position){
    //         return true;
    //     } else {
    //         return false
    //     }
    // }
}