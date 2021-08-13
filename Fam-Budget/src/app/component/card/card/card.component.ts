import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { ReportsComponent } from '../../reports/reports/reports.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private dialog: MatDialog,private dashboardService: DashboardService,private spinner: NgxSpinnerService,) { 
    this.getCards()
    this.spinner.show();
  }
  cards: any
  ngOnInit(): void {
    setTimeout(() =>{ this.spinner.hide() }, 3000); 
  }

  getCards(){
    this.dashboardService.getCards(111, 1, "", false).pipe(first()).subscribe( (data) => {
      this.cards = data
    })
    console.log("Hei");
    }
  
  openAddPolicy(cardNumber:any, accountNumber : any, pin :any){
    let dialogRef = this.dialog.open(ReportsComponent)
    let instance = dialogRef.componentInstance
    instance.addPolicy = true;
    instance.cardNumber =  cardNumber
    instance.accountNumber = accountNumber
    instance.pin = pin
  }
  }


