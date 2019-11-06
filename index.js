var columns = 15;
var rows = 15;
const numberOfMoviments = columns + rows + 5;

var population=[];
var populationLength = 3; 

paths=[];

var iteration = 0;

function setup() {
    createCanvas(500, 500);
    frameRate(5);    
    
    grid = new Grid(rows, columns);

    var start = grid.getSpot(0,0);
    var end = grid.getSpot(columns - 1, rows -1);

    start.wall = false;
    end.wall = false;
    
    for(var i = 0; i < populationLength; i++) {
        population[i] = new Robot();
        population[i].generateMoviments(numberOfMoviments);        
    }  
}

function draw() {       
    grid.show();

    for(element of population) {
        if(element.path[iteration] === 1) {
            
        }
        element.path[iteration]
    }
    
    for(element of population) {        
        let x = element.getXPosition();        
        let y = element.getYPosition();        
        grid.getSpot(x,y).show(color(0, 255, 0));
    };

    noLoop();    

    // for (var i = 0; i < path.length; i++) {
    //     path[i].show(color(255, 0, 0));
    // }
}