class Zoo{
    animals:Animal[];
    foodSupplyManager:FoodSupplyManager;
    constructor(animals:Animal[],){
        this.animals=animals
        this.foodSupplyManager=new FoodSupplyManager()
    }
    printAnimalsDetails(){
        for(const animal of this.animals){
            animal.printDetails()
        }
    }
    feedAnimals(){
        for(const animal of this.animals){
            this.foodSupplyManager.useFoodSupply(animal.getFoodType(),animal.dailyQuantityInKilos)
        }
    }
}

const animals: Animal[]= [
new Lion("Simba"),
new Lion("Nala"),
new Whale("Willy"),
new Goose("Akka"),
new SnowyOwl("Hedwig"),
new Clownfish("Nemo"),
new Clownfish("Marlin")
]
const zoo = new Zoo(animals)
zoo.printAnimalsDetails()
for(let i=1;i<=14;i++){
    console.log(`day ${i}:`)
    zoo.feedAnimals()
}