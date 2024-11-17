import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './Service/master.service';
import { IApiResponseModel, Itask, task } from './Model/task';
import { CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  taskObj:task=new task();//Yo class ho jasla fild bind r store garxa field
  taskList:Itask[]=[];//YO array ho jasla get garxa data API bata ani show hunxa
  masterService=inject(MasterService);

  ngOnInit(): void {
    
    this.loadAllTask();
  }
  
 

  loadAllTask(){
    
    this.masterService.getAllTaskList().subscribe((res:IApiResponseModel)=>{
   this.taskList=res.data
    
  })
  }
  addTask(){
    this.masterService.createNewTask(this.taskObj).subscribe((res:IApiResponseModel)=>{
      if(res.result){
      alert("Added Task...............");
      this.taskObj=new task();
      this.loadAllTask();
      }
    });
  }
  deleteTask(id:number){
    const isDelete=confirm("Do you really want to delete id="+id);
    if(isDelete){
      this.masterService.deleteById(id).subscribe((res:IApiResponseModel)=>{
        if(res.result){
          alert(res.message)
          this.loadAllTask();
        }
      })
        }
    }
    Edit(item:task){
    
      const dat = new Date(this.taskObj.dueDate);

      if (!isNaN(dat.getTime())) { // Check if the date is valid
        const day = ('0' + dat.getDate()).slice(-2);
        const month = ('0' + (dat.getMonth() + 1)).slice(-2);
        const today = dat.getFullYear() + '-' + month + '-' + day;
        
        // Update the input field directly
      (<HTMLInputElement>document.getElementById('txtDate')).value = today;
      this.taskObj=item;
      } else {
        console.warn('Invalid date:', this.taskObj.dueDate);
      }
     
    }
   updateTask(taskObj:task){
    this.masterService.onUpdate(taskObj).subscribe((res:IApiResponseModel)=>{
      if(res.result){
        alert(res.message)
        this.loadAllTask();
        this.taskObj=new task();

      }
    })
   }
}
