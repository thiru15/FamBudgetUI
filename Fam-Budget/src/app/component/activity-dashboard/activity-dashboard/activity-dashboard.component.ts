import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-activity-dashboard',
  templateUrl: './activity-dashboard.component.html',
  styleUrls: ['./activity-dashboard.component.scss']
})
export class ActivityDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public usersChartLabels: Label[] = [['Funds Allocated'], ['Money Spent']];
  public usersChartData: SingleDataSet = [500, 200];
  public usersChartType: ChartType = 'doughnut';
  public userChartColor: Color[] = [{ backgroundColor: ['#0047AB', '#40B5AD'] }]
  public userChartOptions: ChartOptions = {
    legend: {
      labels: {
        fontSize: 8
      },
    },
    maintainAspectRatio: true,
    responsive: true
  }



  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      labels: {
        fontSize: 8
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }]
    }
  };
  public barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', "dec"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = []
  public barChartColor: Color[] = [{ backgroundColor: '#3063A5' }]
  public barChartData: ChartDataSets[] = [
    { data: [165, 549, 1680, 81, 5776, 565, 470, 81, 5776, 565, 470], label: 'expense' },
  ];

  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)',
  //             'rgba(153, 102, 255, 0.2)',
  //             'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //     }]
  // },

}
