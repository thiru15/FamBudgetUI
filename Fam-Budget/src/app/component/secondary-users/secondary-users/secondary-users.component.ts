import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PolicyComponent } from '../../policy/policy.component';
import { first } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-secondary-users',
  templateUrl: './secondary-users.component.html',
  styleUrls: ['./secondary-users.component.scss'],
  
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class SecondaryUsersComponent implements OnInit {
  secondaryUsers: any[] = [];
  policies: any;
  gotPolicies = false
  accountNumber : any;
  active :any;
  secondaryUserId = 123;
  avatarColors: any[] = ["#ffafbd", "#ffc3a0", "#753a88", "#ee9ca7", "#42275a", "#de6262", "#004e92"]
  policyPresent = false

  constructor(private dialog: MatDialog, private dashboardService: DashboardService, private cdref: ChangeDetectorRef,private spinner: NgxSpinnerService,) {
    this.getPolicy()
    this.getSecondarUsers()
  }

  ngOnInit(): void {
    this.active = true
    this.spinner.show();
  }

openDialog() {
  this.dialog.open(FormModalComponent);
}
flip: string = 'inactive';

activate(secondaryId: number, isActive: boolean ) {
  this.dashboardService.deleteSecondaryUser(secondaryId, isActive).subscribe( (data) => {
    console.log(data)
  })
}
// chooseAvatarColor(name: string){
//   console.log(this.avatarColors[name.charCodeAt(0)%this.avatarColors.length])
//   return this.avatarColors[name.charCodeAt(0)%this.avatarColors.length]
// }
  
getSecondarUsers(){
  this.dashboardService.getSecondaryUsers(111).subscribe( (data) => {
    this.secondaryUsers = data
    console.log(this.secondaryUsers)
    for(let ind=0; ind<this.secondaryUsers.length; ind+=1){
        this.secondaryUsers[ind]["avatarColor"] = this.avatarColors[ind%7]
        console.log(this.secondaryUsers[ind]["avatarColor"])
    }
    this.spinner.hide()
  })
}

getPolicy(){
  return this.dashboardService.getPolicies(111, 1).subscribe( (data) => {
      // console.log(data)
      this.policies = data
      this.gotPolicies = true
      this.cdref.markForCheck();
      console.log("policies ", this.policies)
  })
}

openAddPolicy(secondaryId: number, name: string){
  let dialogRef = this.dialog.open(PolicyComponent)
  let instance = dialogRef.componentInstance
  instance.addPolicy = true
  instance.secondaryId =  secondaryId
  instance.secondaryUserName = name
}

openEditPolicy(secondaryId: number, name: string){
  console.log("edit policy")
  let dialogRef = this.dialog.open(PolicyComponent)
  let instance = dialogRef.componentInstance
  instance.editPolicy = true
  instance.editPolicyForm.setValue({
    spendLimit: this.policies[secondaryId].spendLimit,
    expiryPeriod: this.policies[secondaryId].expirationDate
  })
  instance.policyConstraint = this.policies[secondaryId].expirationDate? 'yes-expiry': 'no-expiry'
  instance.secondaryUserName = name
  instance.policyId = this.policies[secondaryId].policyId
}


}