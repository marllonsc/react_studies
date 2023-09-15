"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boate = void 0;
const Auto_1 = require("./Auto");
class Boate extends Auto_1.Auto {
    constructor(_v, _p, _velas) {
        super("Motocicle", _v, _p);
        this._v = _v;
        this._p = _p;
        this._velas = _velas;
    }
    speedUp(qt) {
        this._velocity += qt;
    }
    info() {
        return `${super.info()} Velas number: ${this._velas}  `;
    }
}
exports.Boate = Boate;
