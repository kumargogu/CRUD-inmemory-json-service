import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from './users-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }
  private readonly baseUrl: string = "https://jsonplaceholder.typicode.com/users";
  getAll() {
    return this.httpClient.get<UsersModel[]>(this.baseUrl);
  }
  getById(id: number) {
    let url: string = this.baseUrl + '/' + id;
    return this.httpClient.get<UsersModel>(url);
  }
  create(userModel:UsersModel) {
   return this.httpClient.post(this.baseUrl, userModel);
  }
  update(id:number,userModel:UsersModel) {
    let url: string = this.baseUrl + '/' + id;
   return this.httpClient.put(url, userModel);
  }
  delete(id:number) {
    let url: string = this.baseUrl + '/' + id;
   return this.httpClient.delete(url);
  }

}
