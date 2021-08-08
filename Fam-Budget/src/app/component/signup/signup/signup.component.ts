import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public fb: FormBuilder) {}

  myForm! : FormGroup;
  ngOnInit(): void {
    this.reactiveForm()
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      gender: ['Male'],
      mobile: ['',[Validators.required]],
      email: ['',[Validators.required]],
      relationship: ['',[Validators.required]],
      pannumber: ['',[Validators.required]],
      age: ['',[Validators.required]]
    })
  }
  submitForm(){
    console.log("In submit");
    console.log(this.myForm.value);
  }

}
