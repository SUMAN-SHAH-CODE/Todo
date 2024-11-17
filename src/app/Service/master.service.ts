import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseModel, task } from '../Model/task';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl:String="https://freeapi.gerasim.in/api/JWT/";

  constructor(private http:HttpClient) {
    
   }
   getAllTaskList():Observable<IApiResponseModel>{
     return this.http.get<IApiResponseModel>(this.apiUrl+"GetAllTaskList");
     }
  createNewTask(taskOnj:task):Observable<IApiResponseModel>{
   return this.http.post<IApiResponseModel>(this.apiUrl+"CreateNewTask",taskOnj);
  }
  deleteById(id:number):Observable<IApiResponseModel>{
    return this.http.delete<IApiResponseModel>(this.apiUrl+"DeleteTask?"+"itemId="+id);
  }
  onUpdate(taskObj:task):Observable<IApiResponseModel>{
    return this.http.put<IApiResponseModel>(this.apiUrl+"UpdateTask",taskObj);
  }
}
