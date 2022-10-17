import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  loginForm= new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })
  get userName(){
    return this.loginForm.get('userName');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get email(){
    return this.loginForm.get('email');
  }
  ngOnInit(): void {
  }

  login(){
 //console.log(this.loginForm);
 console.log(this.loginForm.value);
  }

}
