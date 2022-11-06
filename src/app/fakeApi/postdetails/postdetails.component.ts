import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../post-model.model';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
id:number;

postModel=new PostModel();
  constructor(private postService:PostserviceService, private activatedRoute:ActivatedRoute) {
this.id=+activatedRoute.snapshot.paramMap.get('id');
//console.warn(this.id);
   }

  ngOnInit(): void {
    this.postService.getById(this.id).subscribe(res=>{
      console.warn(res);
      this.postModel=res as PostModel;
    })
  }

}
