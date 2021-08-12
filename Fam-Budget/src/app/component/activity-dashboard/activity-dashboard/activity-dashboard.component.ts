import { Component, OnInit } from '@angular/core';
import { ChartColor, ChartOptions, ChartType ,ChartDataSets} from 'chart.js';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';

@Component({
  selector: 'app-activity-dashboard',
  templateUrl: './activity-dashboard.component.html',
  styleUrls: ['./activity-dashboard.component.scss']
})
export class ActivityDashboardComponent implements OnInit {

  recentTransactions:any;
  allocatedAndSpend: any;
  secondaryUsers: any[] = [];
  balance: any;
  yearlyTransactions: any[] = [];
  constructor(private dashboardService: DashboardService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.getAllUserBalance()
    this.getRecentTransactions()
    this.getYearlyTransactions()
 
}

  ngOnInit(): void {
    
  }
  colors = [ '#367588','#002244', '#132257' ,'#0C2340','#B0A6A4','#8B5A00','#8B814C','#008080','#00688B','#754C78','#8B5F65']
  public usersChartLabels: Label[] = [ ['Funds Allocated'], ['Money Spent']];
  // public usersChartData: MultiDataSet = [[]];
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
  public pieChartOptions: ChartOptions = {
    maintainAspectRatio: true,
    responsive: true,
  };
  res :any=[]
   public addColor :any  = (() =>{
    console.log("add color ");
    const colorsLength :any = this.colors.length;
    for(let index=0;index<this.pieChartData.length;index++){
      this.res.push( this.colors[index % colorsLength]);

    }
  })
  
  public pieChartLabels: Label[] = ["You"];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartColor: Color[] = [{backgroundColor: this.res}]
  public pieChartLegend = true;
  public pieChartPlugins = [];
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
  public barChartLabels: Label[] = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', "Dec"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = []
  public barChartColor: Color[] = [{ backgroundColor: '#3063A5' }]
  public barChartData: ChartDataSets[] = [
    { data: [], label: 'expense' },
  ];

  getAllUserBalance(){
    this.dashboardService.getBalance(111, 1, '').subscribe( (data) => {
      console.log(data)
      this.secondaryUsers = data.secondaryaccounts
      
      this.balance = data.primaryaccount[0].balance
      this.pieChartData.push(data.primaryaccount[0].actualBalance)

      for(let ind=0; ind< this.secondaryUsers.length; ind+=1){
        this.pieChartData.push(this.secondaryUsers[ind].fundsAllocated)
        this.pieChartLabels.push(this.secondaryUsers[ind].firstName)
      }
      this.addColor();
    })
    // console.log('pie chart data', this.pieChartData)
  }

  getRecentTransactions(){
    this.dashboardService.getRecentTransactions(111).subscribe((data) => {
      console.log(data)
      this.recentTransactions = data
    })
  }
  
  getYearlyTransactions(){
    this.dashboardService.getYearlyTransactions(111, null).subscribe((data) => {
      console.log(data)
      for(let ind=0; ind<12; ind+=1){
        let key: any = this.barChartLabels[ind]
        if(data[key]==0){
          this.barChartData[0].data?.push(ind*20)
        }
        else{
          this.barChartData[0].data?.push(data[key])
        }
      }
    })
  }


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
