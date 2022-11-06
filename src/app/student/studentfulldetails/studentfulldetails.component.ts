import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModel } from '../student-model.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentfulldetails',
  templateUrl: './studentfulldetails.component.html',
  styleUrls: ['./studentfulldetails.component.css']
})
export class StudentfulldetailsComponent implements OnInit {
  stuModel = new StudentModel();
  id: number;
  constructor(private activatedRoute: ActivatedRoute, private stuService: StudentService) {
    this.id = +activatedRoute.snapshot.paramMap.get('id');
   }

   ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.stuModel = this.stuService.getById(this.id);
} 
}
