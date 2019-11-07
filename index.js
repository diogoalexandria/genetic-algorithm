var columns;
var rows;
var numberOfMoviments;
var target;
var mutationRate;
var populationLenght;
var population;
var bestPath;
var allPath;
var stats;
var iteration = 0;
var visitedSpots = [];

function setup() {
    createCanvas(500, 500);
    frameRate(5);
    
    columns = 20;
    rows = 20;
    
    grid = new Grid(rows, columns);
    
    var start = grid.getSpot(0,0);
    var end = grid.getSpot(columns - 1, rows -1);
    
    start.wall = false;
    end.wall = false;
    
    target = {
        x: columns - 1,
        y: rows - 1
    };
    mutationRate = 0.01;
    populationLenght = 50;
    numberOfMoviments = columns + rows + 5;

    population = new Population(target, mutationRate, populationLenght, numberOfMoviments);
}

function draw() {
    background(0);    
    grid.show();    
    
    for (var i = 0; i < visitedSpots.length; i++) {
        visitedSpots[i].show(color(255, 0, 0));
    }

    for(element of population.elements) {
        let x = element.getXPosition();
        let y = element.getYPosition();
        grid.getSpot(x,y).show(color(0,255,0));
    }

    population.elements.forEach(element => {
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

    let penalties = 0;
    population.elements.map(element => {
        let wasPenalized = element.getPenalty();
        if(wasPenalized) {
            penalties++;
        }
    });

    if(penalties === populationLenght || iteration === numberOfMoviments){
        population.calculateFitness();
    }

    iteration++;

    if(iteration > 3) {
        noLoop();
    }
}