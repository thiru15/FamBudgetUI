import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { 
    this.getCards()
  }
  cards: any
  ngOnInit(): void {
  }

  getCards(){
    this.dashboardService.getCards(111, 1, "", false).pipe(first()).subscribe( (data) => {
      this.cards = data
    })
  }
  }


