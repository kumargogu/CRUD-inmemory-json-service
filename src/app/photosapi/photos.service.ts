import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../fakeApi/post-model.model';
import { PhotosModel } from './photosModel';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private readonly baseUrl: string = "https://jsonplaceholder.typicode.com/photos";
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<any[]>{
    return this.httpClient.get<PhotosModel[]>(this.baseUrl);
  }
  getById(id: number) {
    let url: string = this.baseUrl + '/' + id;
    return this.httpClient.get<PhotosModel>(url);
  }
  create(photoModel:PhotosModel) {
    return this.httpClient.post(this.baseUrl, photoModel);
  }
  update(id: number, photoModel: PhotosModel) {
    let url: string = this.baseUrl + '/' + id;
    return this.httpClient.put(url, PostModel);
  }
  delete(id: number) {
    let url: string = this.baseUrl + '/' + id;
    return this.httpClient.delete(url);
  }

}
