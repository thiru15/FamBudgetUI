import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth/auth.service';
import {Router} from '@angular/router';
import { setUser } from 'src/app/util/auth.util';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
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
    this.loadComponent = content
  }
  submit(){
    this.authService.login(this.form.value.username, this.form.value.password).pipe(first()).subscribe( (data) => {
      if(data.success == true){
        setUser(data)
        this.toastr.success('you have successfully logged in', "Success!")
        this.router.navigate(['/dashboard'])
      }
      else if(data == "PASSWORD_RESET_REQUIRED"){
        this.reset=true
        this.toastr.warning("Reset password required", "Warning!")
      }
    }, (error) => {
        console.log("error in login", error)
        this.toastr.error("Incorrect Username or Password","Error!" )
      })
  }

  resetPassSubmit(){
    const formValue = this.resetPassForm.value
    this.authService.resetTemporaryPassword(formValue.username, formValue.newPassword, formValue.temporaryPassword).pipe(first()).subscribe( (data) => {
      if(data=="SUCCESS"){
        this.reset=false
        this.toastr.success("Password reset success", "Success!")
        this.router.navigate(['./'])
      }
      else{
        this.router.navigate(['./'])
      }
    }, (error) => {
      console.log("error in login", error)
      this.toastr.error("Couldn't reset temporary password","Error!" )
    })
  }

}
