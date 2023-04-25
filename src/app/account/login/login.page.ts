import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {

  }

  login() {
    this.oidcSecurityService.authorize();
  }

}
