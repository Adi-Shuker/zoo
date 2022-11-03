class Animal{
    name: string;
    species: Species;
    foodType:string;
    dailyQuantityInKilos:number;
    constructor(name: string, species: Species, foodType:string, dailyQuantityInKilos:number){
        this.name=name;
        this.species=species;
        this.foodType=foodType;
        this.dailyQuantityInKilos=dailyQuantityInKilos;     
    }
    printDetails(){
        console.log(`
        name:${this.name}
        animal: ${this.constructor.name}
        species: ${this.species.constructor.name}
        ${this.species.getDetalis()}
        foodType: ${this.foodType}
        dailyQuantityInKilos: ${this.dailyQuantityInKilos}
        `)
    }
    getFoodType(){
        return this.foodType;
    }
    getDailyQuantityInKilos(){
        return this.dailyQuantityInKilos;
    }
}