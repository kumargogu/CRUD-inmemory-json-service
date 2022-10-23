import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';
import { PhotosModel } from '../photosModel';

@Component({
  selector: 'app-photodetails',
  templateUrl: './photodetails.component.html',
  styleUrls: ['./photodetails.component.css']
})
export class PhotodetailsComponent implements OnInit {
  id: number;
  photoModel = new PhotosModel();
  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotosService) { 
    this.id = +activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.photoService.getById(this.id).subscribe(res => {
      this.photoModel = res;
    })
  }

}
