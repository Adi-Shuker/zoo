class FoodSupplyManager{
    foodSupply =new Map<string, number>(
        [
            ["meat",60],
            ["plankton",6000],
            ["algae",50],
            ["seeds",15],
            ["worms",10],
        ]
    );
    addFoodSupply(foodType:string, amount:number){
        this.foodSupply.set(foodType, this.foodSupply.get(foodType)||0+amount)
    }
    useFoodSupply(foodType:string, amount:number){
        let currentAmount = this.foodSupply.get(foodType)||0;
        if(currentAmount != undefined && currentAmount!>=amount){
            console.log(`${foodType} runs out`)
            console.log('refill...')
            this.addFoodSupply(foodType, amount*10);
            console.log('finished')
            currentAmount = this.foodSupply.get(foodType)||0;
        }
        this.foodSupply.set(foodType, currentAmount-amount)
    }
}