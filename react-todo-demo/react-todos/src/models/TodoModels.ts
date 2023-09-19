class TodoModel {
    rowNumber: number;
    rowDescription: string;
    rowAssign: string;

    constructor(rowNumber: number, rowDescription: string, rowAssign: string){
        this.rowAssign = rowAssign;
        this.rowDescription = rowDescription;
        this.rowNumber = rowNumber;
    }
}