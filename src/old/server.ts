import { User } from "./user";
import { Math,Math2 } from "./math";

let ahmed = new User("ahmed");
console.log(ahmed.name)

let calc = new Math(5)
let math2 = new Math2(9)

console.log(calc.sum(5));
console.log(calc.sub(20));
console.log(calc.mult(10));
console.log(calc.div(8));
//using math 2 
console.log(math2.sq());