class Owl extends Animal{
    constructor(name: string){
        const species=new Bird(1.2);
        const foodType="worms"
        const dailyQuantityInKilos=0.1
        super(name, species, foodType, dailyQuantityInKilos);
    }
}