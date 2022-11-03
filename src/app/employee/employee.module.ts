import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from "./employee.service";
import { EmployeedetailCoponent } from "./employeedetail.component";
const routes: Routes = [
    {
        path: 'employee/:id',
        component:EmployeedetailCoponent
    },
    {
        path: 'employee',
        component:EmployeeComponent
    }
    
]
@NgModule({
    declarations: [
        EmployeeComponent,
        EmployeedetailCoponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    providers: [EmployeeService],
    bootstrap:[]
})
export class EmployeeModule{ }