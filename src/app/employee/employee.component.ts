import { Component, OnInit } from "@angular/core";
import { EmployeeModule } from "./employee.module";
import { EmployeeService } from "./employee.service";

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    styleUrls:['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
    lstEmploye: EmployeeModule[];
    constructor(private empService:EmployeeService) {
        
    }
    ngOnInit(): void {
        this.loadData();
        console.log(this.loadData())
    }
    loadData() {
      this.lstEmploye= this.empService.getAll();
    }
    deleteEmployee(id: number) {
        if (confirm("Are you sure to delete?")) {
            this.empService.delete(id);
        }
        this.loadData();
    }


}