import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from "@angular/forms";

import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { USER_DATA } from 'src/app/util/auth.util';
import { DialogData } from '../secondary-users/secondary-users.component';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @ViewChild('closebutton') closebutton :any
   

  constructor(public fb: FormBuilder, private dashboardService: DashboardService,  private dialogRef: MatDialogRef<FormModalComponent>) {
   
  }


  myForm! : FormGroup;
  ngOnInit(): void {
    this.reactiveForm()
  }
  // step="0.01" 
  reactiveForm() {
    this.myForm = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      gender: ['Male'],
      mobile: ['',[Validators.required]],
      email: ['',[Validators.required]],
      relationship: ['',[Validators.required]],
      pannumber: ['',[Validators.required]],
      isMinor: ['false',[Validators.required]],
      fundsAllocated: ['', Validators.required, ]
    })
  }
  //email = new FormControl('', [Validators.required, Validators.email]);
  submitForm(){
    console.log("In submit");
    console.log(this.myForm.value);
    this.dialogRef.close(this.myForm.value);
    this.createSecondaryUser()
  }

  createSecondaryUser(){
    this.dashboardService.createSecondaryUser(USER_DATA.accountNumber, this.myForm).pipe(first()).subscribe( (data) => {
      console.log("ddd",data);
    })
  }

}
