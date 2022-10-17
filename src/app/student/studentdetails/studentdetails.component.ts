import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel } from '../student-model.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
id:number;
student=new StudentModel();
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private studentService:StudentService) {
this.id=+activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
 this.student= this.studentService.getById(this.id);
  }
  goTolist(){
this.router.navigate(['/student']);
  }
}
