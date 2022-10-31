import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  data: any[] = [
    { Id: 1, Name: "Ayyappa", Salary: 10000,email:"a@gamil.com" },
    { Id: 2, Name: "Vinayaka", Salary: 20000,email:"b@gamil.com" },
    { Id: 3, Name: "Manikanta", Salary: 30000,email:"c@gamil.com" },
  ];
  getAll():any[] {
    return this.data;
  }
}
