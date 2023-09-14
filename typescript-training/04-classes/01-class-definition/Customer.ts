import { Student } from "./Student";

class Customer {

    private _firstName: String;
    private _lastName: String;

    constructor(first: String, last: String) {
        this._firstName = first;
        this._lastName = last;
    }

    public get firstName(): String {
        return this._firstName;
    }

    public set firstName(first: String) {
        this._firstName = first;
    }

    public get lastName(): String {
        return this._lastName;
    }

    public set lastName(first: String) {
        this._lastName = first;
    }


}

let myCustomer = new Customer("Martin","Dixon");
let st = new Student("Lucas",8);

//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";

console.log(st);

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);