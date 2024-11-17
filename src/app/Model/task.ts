export interface Itask {
    itemId: number,
    taskName: string,
    taskDescription: string,
    dueDate: Date,
    createdOn: Date,
    isCompleted: boolean,
    tags: string,
    completedOn: Date,
}
export class task {
    itemId: number;
    taskName: string;
    taskDescription: string
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean
    tags: string;
    completedOn: Date;
    constructor(){
        this.itemId=0;
        this.taskName="";
        this.taskDescription="";
        this.dueDate=new Date();
        this.createdOn=new Date();
    this.isCompleted=false; 
   this. tags=""
    this.completedOn=new Date();

    }
}
export interface IApiResponseModel{
    
        message: string,
        result: boolean,
        data: any //since its a array of result so any
      
}