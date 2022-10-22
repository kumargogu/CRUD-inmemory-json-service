import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersModel } from '../users-model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  id: number;
  userModel = new UsersModel();
  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) {
    this.id = +activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.userService.getById(this.id).subscribe(res => {
      console.warn(res);
      this.userModel = res;
    })
  }

}
