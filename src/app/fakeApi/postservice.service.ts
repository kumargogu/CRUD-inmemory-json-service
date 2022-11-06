import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { CommonService } from './CommonService/common.service';
import { PostModel } from './post-model.model';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService extends CommonService{

/* private readonly apiBaseUrl:string="https://jsonplaceholder.typicode.com/posts"; */
  constructor(public httpClient: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts',httpClient )
  }
/* getAll(){
  return this.httpClient.get<PostModel[]>(this.apiBaseUrl);
}
getById(id:number){
let url:string=this.apiBaseUrl+'/'+id;
return this.httpClient.get<PostModel>(url);
}
create(post:PostModel){
return this.httpClient.post(this.apiBaseUrl,post);
}
update(id:number,post:PostModel){
let url:string=this.apiBaseUrl+'/'+id;
return this.httpClient.put(url,post)
//return this.httpClient.patch(url,{UserId:post.userId,title:post.title});
}
delete(id:number){
let url:string=this.apiBaseUrl+'/'+id;
return this.httpClient.delete(url);

} */
}
