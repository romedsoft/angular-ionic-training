import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, firstValueFrom } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate {
  constructor(private oidcSecurityService: OidcSecurityService, private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    return this.oidcSecurityService.checkAuth().pipe(
      take(1),
      map((response : LoginResponse) => {

        // allow navigation if authenticated
        if (response.isAuthenticated) {
          return true;
        }

        // redirect if not authenticated
        return this.router.parseUrl('/account/login');
      })
    );
  }
}