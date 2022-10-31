import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  lstData: any[];
  
  dataKeys: any[]=[];
  dataValues?: any[]=[];
  constructor(private tableService:TableService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.lstData = this.tableService.getAll();

    this.lstData.forEach((element:any) => {
      this.dataKeys = Object.keys(element);
      this.dataValues.push(Object.values(element));
    })
    
  }

}
 