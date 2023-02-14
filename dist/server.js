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
let BMW = new Car(CarColorsList.red);
BMW.move();
