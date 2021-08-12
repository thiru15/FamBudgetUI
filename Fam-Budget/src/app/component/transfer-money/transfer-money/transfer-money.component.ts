import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { first } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss']
})
export class TransferMoneyComponent implements OnInit {

  transactionGroup!: FormGroup;
  selected: any;
  amount: any;
  secondaryUsers: any[] = [];
  constructor(private DashboardService: DashboardService,private fb: FormBuilder, private cdref: ChangeDetectorRef) {
    this.getFamily();
    
   }
  ddlCategory = "";

  ngOnInit(): void {
    this.transactionGroup = this.fb.group({
      merchant: ['', [Validators.required]],
      amount: ['', [Validators.required] ],
    })
  }

  submitForm() {
    //console.log('jjjj ',this.transactionGroup.value)
    this.amount = this.transactionGroup.value.amount
    console.log("The Form ");
    console.log("selected  ",this.selected,this.amount);
    this.sendMoney(this.amount);
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  sendMoney(amount:any){
    console.log("Amount ",amount)
    return this.DashboardService.sendMoney(111,this.selected,amount).pipe(first()).subscribe( (data) => {
      this.secondaryUsers = data
    })
  }
  getFamily(){
    return this.DashboardService.getSecondaryUsers(111).pipe(first()).subscribe( (data) => {
      console.log("data ",data);
      //window.open(data);'
      this.secondaryUsers = data
    })

  }


}
