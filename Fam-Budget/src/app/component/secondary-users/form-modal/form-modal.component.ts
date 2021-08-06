import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../secondary-users/secondary-users.component';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

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
  //email = new FormControl('', [Validators.required, Validators.email]);
  submitForm(){
    console.log("In submit");
    console.log(this.myForm.value);
  }


}
