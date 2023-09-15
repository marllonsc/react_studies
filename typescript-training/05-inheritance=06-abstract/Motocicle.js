"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicle = void 0;
const Auto_1 = require("./Auto");
class Motocicle extends Auto_1.Auto {
    constructor(_v, _p, _cilindre) {
        super("Motocicle", _v, _p);
        this._v = _v;
        this._p = _p;
        this._cilindre = _cilindre;
    }
    speedUp(qt) {
        this._velocity += qt;
    }
    info() {
        return `${super.info()} Cilindre number: ${this._cilindre}  `;
    }
}
exports.Motocicle = Motocicle;
