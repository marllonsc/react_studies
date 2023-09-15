import { Auto } from "./Auto";

export class Motocicle extends Auto{

    speedUp(qt: number): void {
        this._velocity += qt;
    }

    constructor(private _v:number, private _p:number, private _cilindre:number){
        super("Motocicle",_v,_p);
    }

    public info():string{
        return `${super.info()} Cilindre number: ${this._cilindre}  `
    }

}