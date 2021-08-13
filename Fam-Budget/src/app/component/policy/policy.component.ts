import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { USER_DATA } from 'src/app/util/auth.util';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  policyForm: FormGroup;
  editPolicyForm: FormGroup;
  editPolicy: boolean =false;
  addPolicy: boolean= false;

  secondaryId!: number;
  secondaryUserName!: string;
  policyConstraint: string = 'no-expiry'
  startDate: Date = new Date()
  policyId!: string;
  spendLimit!: number;


  constructor(private fb: FormBuilder, private dashboardService: DashboardService) { 
      this.policyForm = this.fb.group({
        spendLimit: [100.0,[Validators.required, Validators.min(100.0)]],
        expiryPeriod: (this.policyConstraint != 'no-expiry')? Validators.required : !Validators.required
      })

      this.editPolicyForm = this.fb.group({
        spendLimit: (this.spendLimit, [Validators.required, Validators.min(100.0)]),
        expiryPeriod:  (this.policyConstraint != 'no-expiry')? Validators.required : !Validators.required
      })
  }

  ngOnInit(): void {
  }

  submitPolicyForm(){
    console.log(this.policyForm.value)
    const expiry = (this.policyConstraint == 'no-expiry')? '': this.policyForm.value.expiryPeriod
    this.dashboardService.createPolicy(USER_DATA.userId, USER_DATA.accountNumber, true, this.secondaryId,expiry, this.policyForm.value.spendLimit)
            .subscribe( (data) => {
              console.log(data)
            })
  }

  submitEditPolicyForm(){
    console.log(this.editPolicyForm.value)
    const expiry = (this.policyConstraint == 'no-expiry')? '': this.editPolicyForm.value.expiryPeriod
    this.dashboardService.updatePolicy(USER_DATA.accountNumber, this.policyId, USER_DATA.userId, expiry, this.editPolicyForm.value.spendLimit)
    .subscribe( (data) => {
      console.log(data)
    })
  }

}
