export abstract class Auto{

    constructor(private _type: string, protected _velocity:number, private _places:number){

    }


    public info():string{
        return `Type: ${this._type} velocity max: ${this._velocity}km Number of place in: ${this._places}  `
    }

    abstract speedUp(qt:number):void;
}