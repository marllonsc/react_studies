"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (first) {
            this._firstName = first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (first) {
            this._lastName = first;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Martin", "Dixon");
var st = new Student_1.Student("Lucas", 8);
//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";
console.log(st);
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
