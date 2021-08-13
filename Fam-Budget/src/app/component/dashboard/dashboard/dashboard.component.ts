import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/service/auth/auth/auth.service';
import { getUserDetails } from 'src/app/util/auth.util';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef, private spinner: NgxSpinnerService, private authService: AuthService, private router: Router) { 
    const userDetails = getUserDetails()
  }
  ngOnInit(): void {
  }
  activeLink: string = 'home';
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  logout() {
    this.authService.logout()
    this.router.navigate(["./"])
  }

}
