import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signout-redirect-callback',
  template: `<div></div>`
})
export class SignoutRedirectCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._router.navigate(['/home'], { replaceUrl: true });
  }

}