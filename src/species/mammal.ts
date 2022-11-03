class Mammal implements Species{
    pregnancyDuration:number;
    constructor(pregnancyDuration:number){
        this.pregnancyDuration=pregnancyDuration
    }
    getDetalis(): string {
        return `pregnancy duration: ${this.pregnancyDuration}`
    }
}