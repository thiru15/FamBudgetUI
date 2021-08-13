import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { getUserDetails, USER_DATA } from 'src/app/util/auth.util';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {
    getUserDetails()
    this.getProfileInfo()
   }
  user: any
  userData: any
  ngOnInit(): void {
  }

  getProfileInfo(){
    this.userData = USER_DATA
    console.log('hello user', USER_DATA.accountNumber, USER_DATA.userId)
    this.dashboardService.getPrimaryUserDetails(USER_DATA.accountNumber, USER_DATA.userId).pipe(first()).subscribe( (data) => {
        console.log(data)
        this.user = data
  })
}
}
