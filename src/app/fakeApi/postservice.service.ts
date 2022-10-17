import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { PostModel } from './post-model.model';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService{

private readonly apiBaseUrl:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private httpClient:HttpClient) { }
getAll(){
  return this.httpClient.get<PostModel[]>(this.apiBaseUrl);
}
getById(id:number){
//return this.httpClient
}
create(post:PostModel){

}
update(id:number,post:PostModel){

}
delete(id:number){
//this.httpClient.delete(id);
}
}
