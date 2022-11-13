import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModel } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService,private router:Router) { }
  
  isActive: boolean = true;

  authModel = new AuthModel();
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required,Validators.email,Validators.minLength(6)]),
    password:new FormControl('',[Validators.required,Validators.minLength(3)])
  })
  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }
  login() {
   // console.warn(this.authModel);
    let isVerified: boolean = this.authService.verifyCredetials(this.authModel);
    //console.warn(isVerified);
    if (isVerified) {
      localStorage.setItem('isVerified', 'True');
      localStorage.setItem('currentUser', JSON.stringify(this.authModel.userName));
        
            let isAdmin = this.authService.checkAdmin(this.authModel.userName);
            if (isAdmin) {
              localStorage.setItem('isAdmin', 'True');
          }
           


      alert("login successful...");
      this.router.navigate(['']);
    }
    else {
      alert("Invalied User");
      this.router.navigate(['/login']);
      this.authModel = new AuthModel();
    }
  }
} 
