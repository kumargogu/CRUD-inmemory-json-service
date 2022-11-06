import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeModel } from "./employee.model";
import { EmployeeService } from "./employee.service";

@Component({
    selector: 'employeedetail',
    templateUrl: './employeedetail.component.html',
    styleUrls:['./employeedetail.component.css']
})
export class EmployeedetailCoponent implements OnInit{
    employeeModel=new EmployeeModel();
    id: number;
    constructor(private empService: EmployeeService, private activatedroute: ActivatedRoute) {
        this.id = +activatedroute.snapshot.paramMap.get('id');
    }
    ngOnInit(): void {
        
        this.employeeModel = this.empService.getById(this.id);
    }
}