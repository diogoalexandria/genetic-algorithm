var columns = 50;
var rows = 50;

var penalties = 0;   

function setup() {
    createCanvas(500, 500);
    frameRate(5);    
    
    grid = new Grid(rows, columns);

    var start = grid.getSpot(0,0);
    var end = grid.getSpot(columns - 1, rows -1);

    start.wall = false;
    end.wall = false;
}

function draw() {
    background(0);
    
    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < rows; j++) {
            grid.getSpot(i,j).show(color(255));
        }
    }

    // for (var i = 0; i < path.length; i++) {
    //     path[i].show(color(255, 0, 0));
    // }
}