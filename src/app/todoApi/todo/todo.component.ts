import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoModel = new TodoModel();
  lstTodoModel: TodoModel[];
  title: string;
  alertMsg: string;

  todoKeys: any[] = [];
  todoValues: any[] = [];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata() {
    this.todoService.getAll().subscribe(res => {
      //console.warn(res);
      this.lstTodoModel = res;

      this.lstTodoModel.forEach((elements: any) => {
        this.todoKeys = Object.keys(elements);
        this.todoValues.push(Object.values(elements));
      })
      //console.warn(this.todoValues);
  })
  }
  addTodo() {
    this.title = "Add Todos";
    this.alertMsg = "";
    this.todoModel = new TodoModel();
    
  }
  editTodo(data:TodoModel) {
    this.title = "Edit Todos";
    this.alertMsg = "";
    this.todoModel = data;
  }
  saveTodo() {
    if (this.todoModel.id) {
      this.todoService.update(this.todoModel.id, this.todoModel).subscribe(res => {
        console.warn(res);
        this.alertMsg = "Todos Updated successfully...!";
      })
    } else {
      this.todoService.create(this.todoModel).subscribe(res => {
        console.warn(res);
        this.lstTodoModel.push(res);
        this.alertMsg = "Todos created successfully...!";
      })
    }
    this.todoModel = new TodoModel();
    //this.loaddata();
  }
  deleteTodo(id: number) {
    if (confirm("Are you sure to delete?")) {
      this.todoService.delete(id).subscribe(res => {
        let index: number = this.lstTodoModel.findIndex(x => x.id == id);
        this.lstTodoModel.splice(index, 1);
      })
    }
    //this.loaddata();
  }



}
