import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  accountNumber : any;
  active :any;
  avatarColors: any[] = ["#ffafbd", "#ffc3a0", "#753a88", "#ee9ca7", "#42275a", "#de6262", "#004e92"]

  constructor(public dialog: MatDialog, private dashboardService: DashboardService) {
    this.getSecondarUsers()
  }

  ngOnInit(): void {
    this.active = true
  }

openDialog() {
  this.dialog.open(FormModalComponent);
}
flip: string = 'inactive';

activate() {
  if(this.active == true){
    this.active = false;
  }
  else{
    this.active = true;
  }

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

  })
}

}