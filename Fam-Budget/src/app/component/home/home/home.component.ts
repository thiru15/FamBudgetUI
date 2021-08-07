import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  loadComponent = 'cards'
  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  
  navContentChange(content: string){
    console.log(content)
    this.loadComponent = content
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

}
