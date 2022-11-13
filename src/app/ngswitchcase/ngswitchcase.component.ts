import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchcase',
  templateUrl: './ngswitchcase.component.html',
  styleUrls: ['./ngswitchcase.component.css']
})
export class NgswitchcaseComponent implements OnInit {
  displayMode: string;
  constructor() { }

  ngOnInit(): void {
  }
  viewMode(mode:string) {
    this.displayMode = mode;
    console.warn(this.displayMode);
  }

}
