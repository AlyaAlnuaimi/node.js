"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const math_1 = require("./math");
let ahmed = new user_1.User("ahmed");
console.log(ahmed.name);
let calc = new math_1.Math(5);
let math2 = new math_1.Math2(9);
console.log(calc.sum(5));
console.log(calc.sub(20));
console.log(calc.mult(10));
console.log(calc.div(8));
//using math 2 
console.log(math2.sq());
