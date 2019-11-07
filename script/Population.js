function Population(target, mutationRate, populationLenght, numberOfMoviments) {
    this.elements = [];
    this.matingPool;
    this.generations = 0;
    this.finished = false;
    this.target = target;
    this.mutationRate = mutationRate;
    this.perfectScore = 1;

    this.best;

    for(var i = 0; i < populationLenght; i++) {
        this.elements[i] = new Robot();
        this.elements[i].id = i;
        this.elements[i].generateRandomDirections(numberOfMoviments);        
    };

    this.calculateFitness = function() {
        this.elements.forEach(element => {
            element.calculateFitness(this.target);
        });
    };

    this.naturalSelection = function() {
        this.matingPool = [];

        var maxFitness = 0;
        this.elements.forEach(element => {
            if(this.element > maxFitness) {
                maxFitness = element.fitness;
            }
        });

        this.elements.forEach(element => {
            let fitness = map(element.fitness, 0, maxFitness, 0, 1);
            let ajustFitness = floor(fitness + 100);
            for (var i = 0; i < ajustFitness; i++){
                this.matingPool.push(element);
            };
        });
    };

    this.generate = function() {
        for(var i = 0; i < this.elements.length; i++){
            let indexParentA = floor(random(this.matingPool.length));
            let indexParentB = floor(random(this.matingPool.length));
            let parentA = this.matingPool[indexParentA];
            let parentB = this.matingPool[indexParentB];
            let child = parentA.crossover(parentB);
            child.mutate(this.mutationRate);
            child.id = i;            
            this.elements[i] = child;
        };
        this.generation++;
    }
}