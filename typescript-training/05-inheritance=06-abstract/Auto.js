"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
class Auto {
    constructor(_type, _velocity, _places) {
        this._type = _type;
        this._velocity = _velocity;
        this._places = _places;
    }
    info() {
        return `Type: ${this._type} velocity max: ${this._velocity}km Number of place in: ${this._places}  `;
    }
}
exports.Auto = Auto;
