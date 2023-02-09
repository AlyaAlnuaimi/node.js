"use strict";
//console.log("hello")
let Username = process.argv[2];
let Age = parseInt(process.argv[4] || "0");
const isAdult = (age) => {
    return age > 18;
};
console.log(Username, Age, isAdult(Age) ? 'adult' : 'kid');
