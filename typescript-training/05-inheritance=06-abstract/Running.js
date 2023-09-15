"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Boate_1 = require("./Boate");
const Car_1 = require("./Car");
const Motocicle_1 = require("./Motocicle");
//let auto = new Auto("Auto",100,4);
let car = new Car_1.Car(200, 4, true);
let moto = new Motocicle_1.Motocicle(250, 2, 1300);
let boate = new Boate_1.Boate(100, 200, 12);
car.speedUp(100);
let list = [car, moto, boate];
for (const a of list) {
    console.log("------------------------------------------");
    console.log(a.info());
    console.log("------------------------------------------");
}
