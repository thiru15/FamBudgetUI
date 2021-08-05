import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from 'src/app/component/signup/signup/signup.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { LibrariesModule } from '../../libraries/libraries/libraries.module';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LibrariesModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
