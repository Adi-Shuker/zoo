class Plankton extends Animal{
    constructor(name: string){
        const species=new SeaCreatures(40);
        const foodType="algae"
        const dailyQuantityInKilos=0.001
        super(name, species, foodType, dailyQuantityInKilos);
    }
}