import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  loadComponent = 'cards'
  constructor() { }

  ngOnInit(): void {

  }
  navContentChange(content: string){
    console.log(content)
    this.loadComponent = content
  }
  submit(){
    console.log(this.form.value)
  }

}
