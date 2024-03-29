function Grid(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = new Array(columns);
    
    let widthSpotArena = width / columns;
    let heightSpotArena = height / rows;

    for (let i = 0; i < columns; i++) {
        this.matrix[i] = new Array(rows);
    }

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            this.matrix[i][j] = new Spot(i, j, widthSpotArena, heightSpotArena);
        }
    }

    this.getSpot = function(x, y) {
        return this.matrix[x][y]
    }
    
    this.show = function(){
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                this.matrix[i][j].show(color(255));
            }
        }
    }
}