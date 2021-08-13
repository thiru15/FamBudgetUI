import { Component, OnInit } from '@angular/core';
import { getUserDetails } from 'src/app/util/auth.util';

@Component({
  selector: 'app-kyc-details',
  templateUrl: './kyc-details.component.html',
  styleUrls: ['./kyc-details.component.scss']
})
export class KycDetailsComponent implements OnInit {

  constructor() { 
    const userDetails = getUserDetails()
  }

  ngOnInit(): void {
  }

}
