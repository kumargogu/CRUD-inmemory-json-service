import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../fakeApi/CommonService/common.service';
import { TodoModel } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends CommonService {
/* private readonly baseUrl: string = "https://jsonplaceholder.typicode.com/todos"; */
  constructor(public httpClient: HttpClient) {
    super('https://jsonplaceholder.typicode.com/todos',httpClient)
   }
  /* getAll() {
    return this.httpClient.get<TodoModel[]>(this.baseUrl);
  }
  getById(id: number) {
    let url: string = this.baseUrl + '/' + id;
    return this.httpClient.get<TodoModel>(url);
  }
  create(todoModel:TodoModel) {
    return this.httpClient.post<TodoModel>( this.baseUrl,todoModel);
  }
  update(id:number,todoModel:TodoModel) {
    let url = this.baseUrl + '/' + id;
    return this.httpClient.put<TodoModel>(url, todoModel);
  }
  delete(id:number) {
    let url = this.baseUrl + '/' + id;
    return this.httpClient.delete<TodoModel>(url);
  } */
}
