import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth/auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  username: any;
  form: FormGroup
  codeConfirmForm: FormGroup

  constructor(private authService: AuthService) { 
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      //password: new FormControl('')
    })

    this.codeConfirmForm = new FormGroup({
      newPassword: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required)
      //password: new FormControl('')
    })
  }
  

  code! : boolean

  ngOnInit(): void {
    this.code = false
  }
  forgotPassSubmit(){
    
    this.username = this.form.value.username
    this.authService.forgotPassword(this.form.value.username).pipe(first()).subscribe( (data) => {
      if(data=="SUCCESS"){
        this.code = true;
      }else{
        //show toaster
      }
    })
  }

  confirmCodeSubmit(){
    this.authService.confirmPassword(this.form.value.username, this.codeConfirmForm.value.code, this.codeConfirmForm.value.newPassword)
    .pipe(first()).subscribe( (data) => {
      if(data=="SUCCESS"){
        //show toaster
      }else{
        //show toaster
      }
    })
  }
  

}
