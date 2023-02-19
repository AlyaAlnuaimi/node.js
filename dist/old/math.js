"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Math2 = exports.Math = void 0;
class Math {
    constructor(mainNumber) {
        this.mainNumber = mainNumber;
    }
    sum(number) {
        return number + this.mainNumber;
    }
    sub(number) {
        return number - this.mainNumber;
    }
    mult(number) {
        return number * this.mainNumber;
    }
    div(number) {
        return number / this.mainNumber;
    }
}
exports.Math = Math;
class Math2 extends Math {
    sq() {
        this.mainNumber + this.mainNumber;
    }
}
exports.Math2 = Math2;
