import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../users-model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userModel = new UsersModel();
  lstUsers: UsersModel[];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.userService.getAll().subscribe(res => {
      //console.warn(res);
      this.lstUsers = res;
    })
  }

  deleteUser(id: number) {
    if(confirm("Are you sure to delete?")){
        this.userService.delete(id).subscribe(res => {
          let index: number = this.lstUsers.findIndex(x => x.id == id);
          this.lstUsers.splice(index, 1);
        })
      }
  }
}
