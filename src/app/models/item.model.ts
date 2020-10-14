export class Item{
    public i_id:string;
    public title:string;
    public amount:number;
    public note:string;
    public date:Date;

    constructor(){

    }

    public updateFrom(src: Item): void {
        this.i_id = src.i_id;
        this.title = src.title;
        this.amount = src.amount;
        this.note = src.note;
        this.date = src.date;
      }

   

}