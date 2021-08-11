import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KycDetailsComponent } from 'src/app/component/kyc-details/kyc-details/kyc-details.component';
import { MyProfileComponent } from 'src/app/component/my-profile/my-profile/my-profile.component';
import { ProfileComponent } from 'src/app/component/profile/profile/profile.component';
import { ResetPasswordComponent } from 'src/app/component/reset-password/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'view',
        component: MyProfileComponent
      },
      {
        path: 'kyc',
        component: KycDetailsComponent
      },
      {
        path: 'changepassword',
        component: ResetPasswordComponent
      },
      {
        path: '**',
        component: MyProfileComponent
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }