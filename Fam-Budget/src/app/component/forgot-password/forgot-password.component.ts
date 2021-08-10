import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
    username: new FormControl(''),
    //password: new FormControl('')
  })
  code! : boolean

  ngOnInit(): void {
    this.code = false
  }
  submit(){
    console.log(this.form.value)
    this.code = true;
  }

}
