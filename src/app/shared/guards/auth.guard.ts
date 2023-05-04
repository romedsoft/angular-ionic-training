import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, firstValueFrom, of } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate {
  constructor(private oidcSecurityService: OidcSecurityService, private authService : AuthService, private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    const isAuthenticated = this.authService.isAuthenticated()
    if(isAuthenticated)
      return of<boolean>(isAuthenticated).pipe(delay(10), map((x: boolean) => x ));;


    return this.oidcSecurityService.checkAuth().pipe(
      take(1),
      map((response : LoginResponse) => {

        // allow navigation if authenticated
        if (response.isAuthenticated) {
          this.authService.setAsAuthenticated();
          return true;
        }

        // redirect if not authenticated
        return this.router.parseUrl('/account/login');
      })
    );
  }
}