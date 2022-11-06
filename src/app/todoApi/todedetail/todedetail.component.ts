import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todedetail',
  templateUrl: './todedetail.component.html',
  styleUrls: ['./todedetail.component.css']
})
export class TodedetailComponent implements OnInit {
  id: number;
  todoModel = new TodoModel();
  constructor(private activatedRoute: ActivatedRoute,private todoService: TodoService) { 
    this.id = +activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.todoService.getById(this.id).subscribe(res => {
      this.todoModel = res;
     })
  }

}
