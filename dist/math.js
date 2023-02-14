"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Math = void 0;
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
