class Lion extends Animal{
    constructor(name: string){
        const species=new Mammal(1.2);
        const foodType="meat"
        const dailyQuantityInKilos=6
        super(name, species, foodType, dailyQuantityInKilos);
    }

}