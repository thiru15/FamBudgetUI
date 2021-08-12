import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { first } from 'rxjs/internal/operators/first';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';
export interface TransactionData {
  transactionID: string;
  merchant: any;
  description: string;
  amount: number;
  transactionStartedAt: string,
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit,AfterViewInit {

  myForm! : FormGroup;
  htmlData: any;
  loading = false;
  // constructor() { }
  reactiveForm() {
    this.myForm = this.fb.group({
  startDate :new FormControl(new Date(2000, 4, 15)),
  endDate : new FormControl(new Date()),
  transactionID : new FormControl(''),
  merchant : new FormControl(''),
  accountType:  new FormControl('primary'),
  transactionType : new FormControl('both')
    }
  )
  }
  name = 'Angular Html To Pdf ';
   pdfTable :any;

  ngOnInit(): void {
    this.spinner.show();
  }
  displayedColumns: string[] = [  "transactionID","merchant", 'description','amount', 'transactionStartedAt'];
  dataSource!: MatTableDataSource<TransactionData>;
  data: TransactionData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private DashboardService: DashboardService, public fb: FormBuilder,private spinner: NgxSpinnerService,) {
    this.reactiveForm()
    this.loading = true; 
    
    this.getAllTransactions()
    // Assign the data to the data source for the table to render
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

   getAllTransactions() {

    
    
    
    return this.DashboardService.getTransactions(111, 1, this.myForm).pipe(first()).subscribe( (data) => {
      this.data = data
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;
      this.spinner.hide();

    })
  }
  downloadTransactions(){
    return this.DashboardService.downloadTransactions(111, 1, undefined).pipe(first()).subscribe( (data) => {
      console.log("data ",data);
      window.open(data);
    })

  }
  onSearch(){
    console.log(this.myForm.value)
    this.getAllTransactions()
  }
  onDownload(){
    console.log("Downloadedd ");
    this.downloadTransactions();
  }

}

