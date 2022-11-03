class Clownfish extends Animal{
    constructor(name: string){
        const species=new Fish(35);
        const foodType="algae"
        const dailyQuantityInKilos=0.003
        super(name, species, foodType, dailyQuantityInKilos);
    }

}