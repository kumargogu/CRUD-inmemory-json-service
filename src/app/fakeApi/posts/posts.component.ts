import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post-model.model';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postModel=new PostModel();
  lstPost:PostModel[];
  alertMsg:string;
  title:string;
  constructor(private postService:PostserviceService) { }

  ngOnInit(): void {
    this.loadData();
  }
loadData(){
  this.postService.getAll().subscribe(res=>{
    this.lstPost=res;
  });
}



deletePost(id:number){
  this.postService

}
saveUser(){

}
}
