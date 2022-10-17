import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent{

  constructor(private formBuilder:FormBuilder) { }

  regForm=this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:[''],
    address:this.formBuilder.group({
      address1:[''],
      address2:[''],
      state:[''],
      pin:['']
    })

  });


  onSubmit(){
    //console.warn(this.regForm.value);
    var firstName=this.regForm.controls['firstName'].value;
    var lastName=this.regForm.get('lastName').value;
    console.warn(firstName);
    console.warn(lastName);

    var address1=this.regForm.get(['address','address1']).value;
    console.warn(address1);
    var address2=this.regForm.get('address').get('address2').value;
    console.warn(address2);
  }
}
