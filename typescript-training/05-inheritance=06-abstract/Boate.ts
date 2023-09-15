import { Auto } from "./Auto";

export class Boate extends Auto{

    speedUp(qt: number): void {
        this._velocity += qt;
    }

    constructor(private _v:number, private _p:number, private _velas:number){
        super("Motocicle",_v,_p);
    }

    public info():string{
        return `${super.info()} Velas number: ${this._velas}  `
    }

}