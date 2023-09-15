import { Auto } from "./Auto";

export class Car extends Auto{

    speedUp(qt: number): void {
        this._velocity += qt;
    }

    constructor(private _v:number, private _p:number, private _turbo:boolean){
        super("Car",_v,_p);
    }

    public info():string{
        return `${super.info()} Turbo: ${this._turbo}  `
    }
}