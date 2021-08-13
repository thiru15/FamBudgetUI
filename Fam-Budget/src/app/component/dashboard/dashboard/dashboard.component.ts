import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
  }
  activeLink: string = 'home';
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

}
