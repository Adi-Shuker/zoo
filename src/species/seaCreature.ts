class SeaCreatures implements Species{
    lowestDepth:number;
    constructor(lowestDepth:number){
        this.lowestDepth=lowestDepth
    }
    getDetalis(): string {
        return `lowest depth: ${this.lowestDepth}`
    }
}