import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss']
})
export class TransferMoneyComponent implements OnInit {

  transactionGroup!: FormGroup;
  constructor(private fb: FormBuilder, private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.transactionGroup = this.fb.group({
      merchant: ['', [Validators.required]],
      description: ['', [Validators.required]],
      amount: ['0.0', [Validators.required, Validators.min(1.0)] ],
      receiverAccountNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      transactionType: ['', Validators.required],
    })
  }

  submitForm() {
    console.log(this.transactionGroup.value)
    console.log(this.transactionGroup.valid)
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }


}
