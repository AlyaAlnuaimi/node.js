//console.log("hello")

/*
let Username:string = process.argv[2];
let Age:number = parseInt(process.argv[4] || "0");
const isAdult = (age: number) => {
    return age > 18;
}


console.log(Username, Age, isAdult(Age)?'adult': 'kid')
*/

// i can access all the colors
enum CarColorsList{
    red="red",
    green ="green",
    blue="blue"
    
}

interface moveable{
    move()
}

class Car implements moveable {
    constructor(public color: CarColorsList){
        console.log(this.color)
    }

    move() {
        console.log("the car move on groung")
    }
    
}

class ship implements moveable {
    move() {
        console.log("the ship sail in water")
    }
}

class person {
    constructor(private name:string, private Machine:Car) {
 
        }
        travel() {
            console.log(`${this.name} start travelling`)
            this.Machine.move
        }

    }

let ahmed = new person("ahmed",new Car(CarColorsList.green))
ahmed.travel()
let BMW = new Car(CarColorsList.red)
BMW.move()
//payment methods 
interface pay{
    pay(amount: number)
}

class MasterCard {

    pay(amount: number){
        console.log("will pay" + this.calcfees(amount) + " using masterCard")
    }

    private calcfees(amount:number){
        return (amount * 5/100)+amount;
    }

}

class Visa {
    pay(amount: number){
        console.log("will pay " + this.calcfees(amount) + " using Visa")
    }
    private calcfees(amount:number){
        return (amount * 1/100)+amount;
    }
    
}

class PayPal {
    pay(amount: number){
        console.log("will pay" + this.calcfees(amount) + " using PyPal")
    }
    private calcfees(amount:number){
        return (amount * 0.5/100)+amount;
    }
}

class User {

    PayByInvoice(paymentmethod){
        paymentmethod.pay(100);
    }
}

new User().PayByInvoice(new MasterCard())
new User().PayByInvoice(new Visa())
new User().PayByInvoice(new PayPal())