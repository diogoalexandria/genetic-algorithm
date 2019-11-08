function Population(target, mutationRate, populationLenght, numberOfMoviments) {
    this.elements = [];
    this.selectedOnes;
    // this.matingPool;
    this.generations = 0;    
    this.target = target;
    this.mutationRate = mutationRate;    
    this.fittestElement;

    this.best;

    for(var i = 0; i < populationLenght; i++) {
        this.elements[i] = new Robot();
        this.elements[i].id = i;
        this.elements[i].generateRandomDirections(numberOfMoviments);        
    };

    this.calculateFitness = function() {
        // console.log("Calculado")
        this.elements.forEach(element => {
            element.calculateFitness(this.target);
            // console.log(element.id,element.fitness)
        });
    };

    this.naturalSelection = function(numberOfSelected) {
        this.elements.sort((elementA, elementB) => {
            if (elementA.fitness < elementB.fitness) {
                return 1;
              }
              if (elementA.fitness > elementB.fitness) {
                return -1;
              }              
              return 0;
        });  

        this.selectedOnes = [];
        for(let i = 0; i < numberOfSelected; i++) {                
            fittestElement = this.elements.pop();
            this.selectedOnes.push(fittestElement);    
        }
        
        // this.matingPool = [];

        // var maxFitness = 0;        
        // this.elements.forEach(element => {
        //     if(this.element > maxFitness) {
        //         maxFitness = element.fitness;
        //         fittestElement = element;
        //     }
        // });

        // this.elements.forEach(element => {
        //     let fitness = map(element.fitness, 0, maxFitness, 0, 1);
        //     let ajustFitness = floor(fitness * 10);
        //     for (var i = 0; i < ajustFitness; i++){
        //         this.matingPool.push(element);
        //     };
        // });
    };

    this.generate = function() {
        for(var i = 0; i < populationLenght; i++){
            let indexParentA = floor(random(this.selectedOnes.length));
            let indexParentB = floor(random(this.selectedOnes.length));
            let parentA = this.selectedOnes[indexParentA];
            let parentB = this.selectedOnes[indexParentB];
            let child = parentA.crossover(parentB);
            child.mutate(this.mutationRate);
            child.id = i;            
            this.elements[i] = child;
        };
        this.generation++;
    }
}