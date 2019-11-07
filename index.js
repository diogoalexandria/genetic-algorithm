var columns = 20;
var rows = 20;

numberOfMoviments = columns + rows + 5;

var population = [];
var populationLenght = 50;

var iteration = 0;
var visitedSpots = [];

function setup() {
    createCanvas(500, 500);
    frameRate(5);    
    
    grid = new Grid(rows, columns);

    var start = grid.getSpot(0,0);
    var end = grid.getSpot(columns - 1, rows -1);

    start.wall = false;
    end.wall = false;

    for(var i = 0; i < populationLenght; i++) {
        population[i] = new Robot();
        population[i].id = i;
        population[i].generateRandomDirections(numberOfMoviments);        
    }
}

function draw() {
    background(0);    
    grid.show();    
    
    for (var i = 0; i < visitedSpots.length; i++) {
        visitedSpots[i].show(color(255, 0, 0));
    }

    for(element of population) {
        let x = element.getXPosition();
        let y = element.getYPosition();
        grid.getSpot(x,y).show(color(0,255,0));
    }

    population.forEach(element => {
        direction = element.getEspecificDirection(iteration)
        let x = element.getXPosition();
        let y = element.getYPosition();
        let occupiedSpot = grid.getSpot(x,y);
        let wasPenalized = element.getPenalty();
        console.log(`id: ${element.id}`);
        console.log(element);
        console.log(`direção: ${direction}`);               
        if (direction === 1 && !wasPenalized && element.canMoveDown(occupiedSpot)) {            
            visitedSpots.push(occupiedSpot);
            element.moveDown();
        } else if (direction === 2 && !wasPenalized && element.canMoveRight(occupiedSpot)) {            
            visitedSpots.push(occupiedSpot);
            element.moveRight();
        } else if (direction === 3 && !wasPenalized && element.canMoveUp(occupiedSpot)) {            
            visitedSpots.push(occupiedSpot);
            element.moveUp();
        } else if (direction === 4 && !wasPenalized && element.canMoveLeft(occupiedSpot)) {            
            visitedSpots.push(occupiedSpot);
            element.moveLeft();
        } else {
            element.penalty = true;
        }
    })

    iteration++;

    // if(iteration > 3) {
    //     noLoop();
    // }
}