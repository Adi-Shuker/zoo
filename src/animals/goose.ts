class Goose extends Animal{
    constructor(name: string){
        const species=new Mammal(0.9);
        const foodType="seeds"
        const dailyQuantityInKilos=1
        super(name, species, foodType, dailyQuantityInKilos);
    }
}