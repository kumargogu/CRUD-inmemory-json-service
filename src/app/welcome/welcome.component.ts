import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  logoUrl: string = "./assets/rubylogo.png"
  userName: string = localStorage.getItem('currentUser');
 
  constructor() { }

  ngOnInit(): void {
  }

}
