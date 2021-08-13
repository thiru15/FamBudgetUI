import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { getUserDetails, USER_DATA } from 'src/app/util/auth.util';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { 
    const userDetails = getUserDetails()
    this.getCards()
  }
  cards: any
  ngOnInit(): void {
  }

  getCards(){
    this.dashboardService.getCards(USER_DATA.accountNumber, USER_DATA.userId, "", false).pipe(first()).subscribe( (data) => {
      this.cards = data
    })
  }
  }


