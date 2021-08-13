import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from 'src/app/component/profile/profile/profile.component';
import { MyProfileComponent } from 'src/app/component/my-profile/my-profile/my-profile.component';
import { ResetPasswordComponent } from 'src/app/component/reset-password/reset-password/reset-password.component';
import { KycDetailsComponent } from 'src/app/component/kyc-details/kyc-details/kyc-details.component';
import { LibrariesModule } from '../../libraries/libraries/libraries.module';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ProfileComponent,
    MyProfileComponent,
    ResetPasswordComponent,
    KycDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    LibrariesModule,
    FlexLayoutModule,
    RouterModule,
    NgxSpinnerModule
  ],
  exports:[
    RouterModule,
    LibrariesModule,
    NgxSpinnerModule
  ]
})
export class ProfileModule { }
