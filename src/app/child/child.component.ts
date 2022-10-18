import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
 /*  inputs:['nameOftheFruit'] */
})
export class ChildComponent implements OnInit {
  @Input() nameOftheFruit:string;

/*   @Input('nameOftheFruit') fruit:string; */

/* nameOftheFruit:string; */

  constructor() { }

  ngOnInit(): void {
  }

}
