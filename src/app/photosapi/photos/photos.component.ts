import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { PhotosModel } from '../photosModel';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  lstPhotos: PhotosModel[];
  title: string;
  alertMsg: string;
  photoModel = new PhotosModel();
  constructor(private photoService:PhotosService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.photoService.getAll().subscribe(res => {
    //  console.warn(res);
      this.lstPhotos = res;
  })
  }
  addPhoto() {
    this.title = "Add Photo";
    this.alertMsg = "";
    this.photoModel = new PhotosModel();
  }
  editPhoto(photo:PhotosModel) {
    this.title = "Edit Photo";
    this.alertMsg = "";
    this.photoModel = photo;
  }
  savePhoto() {
    if (this.photoModel.id) {
      this.photoService.update(this.photoModel.id, this.photoModel).subscribe(res => {
        console.warn(res);
      })
    } else {
      this.photoService.create(this.photoModel).subscribe(res => {
        console.warn(res);
       // this.lstPhotos = res as PhotosModel[];
      })
    }
    this.photoModel = new PhotosModel();
    //this.loadData();
  }
  deletePhoto(id: number) {
    if(confirm("Are you sure todelete?")){
    this.photoService.delete(id).subscribe(res => {
      let index: number = this.lstPhotos.findIndex(x => x.id == id);
      this.lstPhotos.splice(index, 1);
    })
  }
   // this.loadData();
  }
  
}
