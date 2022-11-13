import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'In-memory and All';
  logoUrl: string = "./assets/rubylogo.png"
  isVerified: string = localStorage.getItem('isVerified');
  
    constructor(private router:Router){}
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
