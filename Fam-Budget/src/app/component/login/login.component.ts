import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  reset = false
  resetPassForm: FormGroup
  loadComponent = 'cards'
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    this.resetPassForm  = this.fb.group({
      username: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      temporaryPassword: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {

  }
  navContentChange(content: string){
    console.log(content)
    this.loadComponent = content
  }
  submit(){
    console.log(this.form.value)
    this.authService.login(this.form.value.username, this.form.value.password).pipe(first()).subscribe( (data) => {
      console.log(data)
      if(data.accessToken){
        this.router.navigate(['/dashboard'])
      }
      else if(data == "PASSWORD_RESET_REQUIRED"){
        this.reset=true
      }
      // else{
      //   // show toaster
      // }
    })
  }

  resetPassSubmit(){
    console.log(this.resetPassForm.value)
    const formValue = this.resetPassForm.value
    this.authService.resetTemporaryPassword(formValue.username, formValue.newPassword, formValue.temporaryPassword).pipe(first()).subscribe( (data) => {
      console.log(data)
      if(data=="SUCCESS"){
        this.reset=false
        this.router.navigate(['./'])
      }
      // else{
      //   // show toaster
      // }
    })
  }

}
