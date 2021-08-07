import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-dashboard',
  templateUrl: './activity-dashboard.component.html',
  styleUrls: ['./activity-dashboard.component.scss']
})
export class ActivityDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles = [
    {text: 'One', color: 'lightblue'},
    {text: 'Two', color: 'lightgreen'},
    {text: 'Three', color: 'lightpink'},
    {text: 'Four', color: '#DDBDF1'},
    {text: 'Five', color: 'lightblue'},
    {text: 'Six', color: 'lightgreen'},
    {text: 'Seven', color: 'lightpink'},
  ];

}
