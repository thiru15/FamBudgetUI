import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { FormModalComponent } from '../form-modal/form-modal.component';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-secondary-users',
  templateUrl: './secondary-users.component.html',
  styleUrls: ['./secondary-users.component.scss']
})
export class SecondaryUsersComponent implements OnInit {
  secondaryUsers: any;
  accountNumber : any;

  constructor(public dialog: MatDialog, private dashboardService: DashboardService) {
    this.getSecondarUsers()
  }

  ngOnInit(): void {
  }
  movies:  Movie[] = [  
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
    {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
] 
openDialog() {
  this.dialog.open(FormModalComponent);
}
  
getSecondarUsers(){
  this.dashboardService.getSecondaryUsers(111).subscribe( (data) => {
    this.secondaryUsers = data
  })
}

}
class Movie {  
  title! : string ;  
  director!: string;  
  cast!: string;  
  releaseDate! : string | undefined;  
}
