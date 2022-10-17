import { StudentModel } from "./student-model.model";

export class StudentService {
lstSutdent:StudentModel[]=[
  {id:1,name:"Ayyappa",course:"Degree",fee:50000,address:"Hyderabad"},
  {id:2,name:"Hanuman",course:"PG",fee:45000,address:"Warangal"},
  {id:3,name:"Manikanta",course:"B-tech",fee:35000,address:"Khammam"}
];
getAll(){
  return this.lstSutdent;
}
getById(id:number){
  let index=this.lstSutdent.findIndex(x=>x.id==id);
  return this.lstSutdent[index];
}
create(student:StudentModel){
 student.id=this.lstSutdent.length+1;
this.lstSutdent.push(student);
}
update(id:number,student:StudentModel){
  let index=this.lstSutdent.findIndex(x=>x.id==id);
  this.lstSutdent[index]=student;
}
delete(id:number){
  let index=this.lstSutdent.findIndex(x=>x.id==id);
  this.lstSutdent.splice(index,1);
}

}
