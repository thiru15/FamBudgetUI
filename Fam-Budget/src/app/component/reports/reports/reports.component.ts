import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  pinForm: FormGroup;
  editPolicyForm: FormGroup;
  editPolicy: boolean =false;
  addPolicy: boolean= false;

  cardNumber:any;
  secondaryId!: number;
  secondaryUserName!: string;
  policyConstraint: string = 'no-expiry'
  startDate: Date = new Date()
  policyId!: string;
  spendLimit!: number;
  accountNumber: void;
  pin: any;
  cards: unknown;


  constructor(private fb: FormBuilder, private dashboardService: DashboardService,private dialogRef: MatDialogRef<ReportsComponent>) { 
      this.pinForm = this.fb.group({
        spendLimit: [this.spendLimit,[Validators.required, Validators.min(100.0)]],
        //expiryPeriod: (this.policyConstraint != 'no-expiry')? Validators.required : !Validators.required
      })

      this.editPolicyForm = this.fb.group({
        spendLimit: (this.spendLimit, [Validators.required, Validators.min(100.0)]),
        expiryPeriod:  (this.policyConstraint != 'no-expiry')? Validators.required : !Validators.required
      })
  }

  ngOnInit(): void {
  }


  submitPolicyForm(){
    console.log("Inside submit");
    console.log(this.pinForm.value);
    const pin = this.pinForm.value.spendLimit;
    console.log(pin);
    console.log("accountNumber ",this.accountNumber);
    console.log("Cards ",this.cardNumber);
    console.log("pin ",this.pin);
    this.dialogRef.close(this.pinForm.value);

    this.dashboardService.setPin(111,  Number(pin),this.cardNumber).pipe(first()).subscribe( (data) => {
       this.cards = data
     })


    //const expiry = (this.policyConstraint == 'no-expiry')? '': this.pinForm.value.expiryPeriod
    // this.dashboardService.createPolicy(1, 111, true, this.secondaryId,expiry, this.pinForm.value.spendLimit)
    //         .subscribe( (data) => {
    //           console.log(data)
    //         })
  }

  submitEditPolicyForm(){
    console.log(this.editPolicyForm.value)
    const expiry = (this.policyConstraint == 'no-expiry')? '': this.editPolicyForm.value.expiryPeriod
    this.dashboardService.updatePolicy(111, this.policyId, 1, expiry, this.editPolicyForm.value.spendLimit)
    .subscribe( (data) => {
      console.log(data)
    })
  }


}
