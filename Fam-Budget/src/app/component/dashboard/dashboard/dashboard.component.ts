import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

}
