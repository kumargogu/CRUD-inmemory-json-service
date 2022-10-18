import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 fruits:string[]=["Apple","Banana","Mango","Orange","Cherry","Grapes"]
  constructor() { }

  ngOnInit(): void {
  }
  addItem(item:string){
    this.fruits.push(item);
  }
}
