import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student-model.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentModel=new StudentModel();
lstStudent:StudentModel[];
alertMsg:string;
title:string;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
this.lstStudent=this.studentService.getAll();
  }
    deleteStudent(id:number){
      if(confirm("Are you sure to delete?")){
        this.studentService.delete(id);
      }
this.loadData();
  }
  addStudent(){
      this.studentModel=new StudentModel();
      this.alertMsg="";
      this.title="Add Student"
  }
  editStudent(student:StudentModel){
      this.studentModel=student;
      this.title="Edit Student"
      this.alertMsg="";
  }
  saveStudent(){
    if(this.studentModel.id){
    this.studentService.update(this.studentModel.id,this.studentModel);
    this.alertMsg="Data updated successfully";
    }
    else
    {
      this.studentService.create(this.studentModel);
      this.alertMsg="Data created successfully";
    }
    this.studentModel=new StudentModel();
    this.loadData();
  }

}
