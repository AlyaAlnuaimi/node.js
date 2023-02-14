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

class Car {
    constructor(public color: CarColorsList){
        console.log(this.color)
    }

    move() {
        console.log("the car move on groung")
    }
    
}

class ship {
    move() {
        console.log("the ship sail in water")
    }
}

class person {
    constructor(private name:string, private m:Car) {
 
        }
        travel() {
            console.log(`${this.name} start travelling`)
            this.m.move
        }

    }

let ahmed = new person("ahmed",new Car(CarColorsList.green))
ahmed.travel()
let BMW = new Car(CarColorsList.red)
BMW.move()
