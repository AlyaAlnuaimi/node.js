export class Math {
    constructor(protected mainNumber:number){
    
    }

    sum(number:number):number{
        return number + this.mainNumber
    }
    sub(number:number):number{
        return number - this.mainNumber

    }
    mult(number:number):number{
        return number * this.mainNumber

    }
    div(number:number):number{
        return number / this.mainNumber

    }

}

export class Math2 extends Math{
    sq(){
        this.mainNumber + this.mainNumber
    }

}