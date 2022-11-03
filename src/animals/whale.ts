class Whale extends Animal{
    constructor(name: string){
        const species=new Mammal(1.2);
        const foodType="plankton"
        const dailyQuantityInKilos=2000
        super(name, species, foodType, dailyQuantityInKilos);
    }
}