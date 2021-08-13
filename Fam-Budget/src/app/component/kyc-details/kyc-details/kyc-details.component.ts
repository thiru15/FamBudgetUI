import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { getUserDetails, USER_DATA } from 'src/app/util/auth.util';

@Component({
  selector: 'app-kyc-details',
  templateUrl: './kyc-details.component.html',
  styleUrls: ['./kyc-details.component.scss']
})
export class KycDetailsComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { 
    getUserDetails()
    this.getKycInfo()
  }
  kyc: any

  ngOnInit(): void {
  }

  getKycInfo(){
    this.dashboardService.getKycUrls(USER_DATA.userId).pipe(first()).subscribe( (data) => {
        this.kyc = data
  })
}
// image/*,.pdf,.doc,.docx JPG
  isImageUrl(key: string){
    const imageTypes= ["jpg","gif", "jpeg","png" ]
    const ext = key.split('.').pop() || ''
    if(imageTypes.includes(ext)){
        return true
    }
    return false
  }
}


