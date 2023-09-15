"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Auto_1 = require("./Auto");
class Car extends Auto_1.Auto {
    constructor(_v, _p, _turbo) {
        super("Car", _v, _p);
        this._v = _v;
        this._p = _p;
        this._turbo = _turbo;
    }
    speedUp(qt) {
        this._velocity += qt;
    }
    info() {
        return `${super.info()} Turbo: ${this._turbo}  `;
    }
}
exports.Car = Car;
