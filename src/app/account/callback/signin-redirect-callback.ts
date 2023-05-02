import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin-redirect-callback',
  template: `<div></div>`
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private oidcSecurityService: OidcSecurityService, private _router: Router) { }

  ngOnInit(): void {

    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken }) => {
        // ...
        this._router.navigate(['/home'], { replaceUrl: true });
            
      });
    
  }
}