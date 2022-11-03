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
    this.lstPost=res as PostModel[];
  });
}

addPost(){
  this.postModel=new PostModel();
  this.title="Add Post";
  this.alertMsg="";
}
editPost(postModel:PostModel){
  this.title="Edit Post";
  this.postModel=postModel;
  this.alertMsg="";
}


deletePost(id:number){
    if(confirm("Are you sure to delete?")){
      this.postService.delete(id).subscribe(res=>{
        console.warn(res);
        let index=this.lstPost.findIndex(x=>x.id==id)
        this.lstPost.splice(index,1);
      })
    // this.loadData();
    }
 }
savePost(){
    if(this.postModel.id){
      this.postService.update(this.postModel.id,this.postModel).subscribe(res=>{
       /*  console.warn(res);
        let index=this.lstPost.findIndex(x=>x.id==this.postModel.id);
        this.lstPost[index]=res as PostModel; */
      })
      this.alertMsg="Post Updated Successfully"}
      else{
        this.postService.create(this.postModel).subscribe(res=>{
          console.warn(res);
          this.lstPost.push(res as PostModel);
        })
        this.alertMsg="Post Created Successfully";
      }
      this.lstPost.push(this.postModel);
    this.postModel=new PostModel();
    //this.loadData();
    }

}
