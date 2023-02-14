"use strict";
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
var CarColorsList;
(function (CarColorsList) {
    CarColorsList["red"] = "red";
    CarColorsList["green"] = "green";
    CarColorsList["blue"] = "blue";
})(CarColorsList || (CarColorsList = {}));
class Car {
    constructor(color) {
        this.color = color;
        console.log(this.color);
    }
    move() {
        console.log("the car move on groung");
    }
}
class ship {
    move() {
        console.log("the ship sail in water");
    }
}
class person {
    constructor(name, Machine) {
        this.name = name;
        this.Machine = Machine;
    }
    travel() {
        console.log(`${this.name} start travelling`);
        this.Machine.move;
    }
}
let ahmed = new person("ahmed", new Car(CarColorsList.green));
ahmed.travel();
let BMW = new Car(CarColorsList.red);
BMW.move();
class MasterCard {
    pay(amount) {
        console.log("will pay" + this.calcfees(amount) + " using masterCard");
    }
    calcfees(amount) {
        return (amount * 5 / 100) + amount;
    }
}
class Visa {
    pay(amount) {
        console.log("will pay " + this.calcfees(amount) + " using Visa");
    }
    calcfees(amount) {
        return (amount * 1 / 100) + amount;
    }
}
class PayPal {
    pay(amount) {
        console.log("will pay" + this.calcfees(amount) + " using PyPal");
    }
    calcfees(amount) {
        return (amount * 0.5 / 100) + amount;
    }
}
class User {
    PayByInvoice(paymentmethod) {
        paymentmethod.pay(100);
    }
}
new User().PayByInvoice(new MasterCard());
new User().PayByInvoice(new Visa());
new User().PayByInvoice(new PayPal());
