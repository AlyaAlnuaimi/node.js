"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// we install express (npm i express)
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", function (req, res) {
    // res.sendFile(join(__dirname,'..','html','index.html'));
});
app.listen(6000);
