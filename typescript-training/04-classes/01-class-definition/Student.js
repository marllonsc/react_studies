"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(_name, grade) {
        this._name = _name;
        this.grade = grade;
    }
    return Student;
}());
exports.Student = Student;
var st = new Student("msc", 10);
var st2 = new Student("Br", 7.25);
console.log(st);
console.log(st2);
