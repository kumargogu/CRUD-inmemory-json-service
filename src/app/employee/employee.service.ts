import { EmployeeModel } from "./employee.model";

export class EmployeeService{

    constructor(){}
    lstEmployee: EmployeeModel[] = [
        { id: 1, name: "Ayyappa", salary: 30000, dept: "dev" },
        { id: 2, name: "Manikanta", salary: 40000, dept: "jeprogrammer" },
        { id: 3, name: "Ganesh", salary: 50000, dept: "manager" }
    ];
    getAll() {
        return this.lstEmployee;
    }
    getById(id: number) {
        let index = this.lstEmployee.findIndex(x => x.id == id);
        return this.lstEmployee[id];
    }
    create(employee: EmployeeModel) {
        employee.id=this.lstEmployee.length+1
        return this.lstEmployee.push(employee);
    }
    update(id:number,employee:EmployeeModel) {
        let index = this.lstEmployee.findIndex(x => x.id == id);
        return this.lstEmployee[index]=employee
    }
    delete(id:number) {
        let index = this.lstEmployee.findIndex(x => x.id == id);
        return this.lstEmployee.splice(index, 1);
    }
}