import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth/auth.service';
import { isAuthenticated, isPrimaryUser, isSecondaryUser } from 'src/app/util/auth.util';

@Injectable({
  providedIn: 'root'
})
export class PrimaryAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean{
      if (isPrimaryUser()) {
        return true;
      }
      this.router.navigate(['/']);
      return false
  }
}

@Injectable({
  providedIn: 'root',
})
export class SecondaryGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (isSecondaryUser()) {
      return true;
    }
    this.router.navigate(['/']);
    return false
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/']);
    return false
  }
}

// @Injectable({
//   providedIn: 'root',
// })
// export class LoginGuardService implements CanActivate {
//   constructor(private router: Router, private authService: AuthService) {}
//   canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.authService.getCurrentUserSession().then((currentUserSession) => {
//       if (!currentUserSession) {
//         // Return true if user is not authenticated
//         return true;
//       }
//       const userGroups: string[] = currentUserSession.getIdToken().payload['cognito:groups'];
//       // if (userGroups.includes(environment.adminGroupName)) {
//       //   // Redirect to Employee Dashboard page if authenticated user belongs to Employee User Group
//       //   return this.router.navigate(['dashboard/reports']);
//       // }

//       // if (userGroups.includes(environment.userGroupName)) {
//       //   // Redirect to Admin Dashboard page if authenticated user belongs to Admin User Group
//       //   return this.router.navigate(['dashboard/interviews']);
//       // }
//       return true;
//     }); 
//   }
// }