//console.log("hello")


let Username:string = process.argv[2];
let Age:number = parseInt(process.argv[4] || "0");
const isAdult = (age: number) => {
    return age > 18;
}


console.log(Username, Age, isAdult(Age)?'adult': 'kid')