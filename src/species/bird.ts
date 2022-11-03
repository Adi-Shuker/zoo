class Bird implements Species{
    wingspan: number;
    constructor(wingspan: number){
        this.wingspan=wingspan
    }
    getDetalis(): string {
        return `wingspan: ${this.wingspan}`;
    }
}