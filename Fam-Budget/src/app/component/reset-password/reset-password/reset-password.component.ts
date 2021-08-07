import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetGroup!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetGroup = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      retypeNewPassword: ['', [Validators.required] ],
    })
  }
  submitForm() {
    console.log(this.resetGroup.value)
    console.log(this.resetGroup.valid)
  }

  checkPasswords(resetGroup: FormGroup) { // here we have the 'passwords' group
    const password = this.resetGroup.get('oldPassword')!.value;
    const confirmPassword = this.resetGroup.get('newPassword')!.value;
  
    return password === confirmPassword ? null : { notSame: true }     
  }

}
