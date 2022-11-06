import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class CommonService{
   
    constructor(@Inject(String) private apiBaseUrl:string,public httpClient:HttpClient) { }
   
  
getAll(){
  return this.httpClient.get(this.apiBaseUrl);
}
getById(id:number){
let url:string=this.apiBaseUrl+'/'+id;
return this.httpClient.get(url);
}
create(createModel:any){
return this.httpClient.post(this.apiBaseUrl,createModel);
}
update(id:number,updateModel:any){
let url:string=this.apiBaseUrl+'/'+id;
return this.httpClient.put(url,updateModel)
//return this.httpClient.patch(url,{UserId:post.userId,title:post.title});
}
delete(id:number){
let url:string=this.apiBaseUrl+'/'+id;
return this.httpClient.delete(url);

}

}