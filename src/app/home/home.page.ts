import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from '../shared/services/user.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public oidcSecurityService: OidcSecurityService, public userService : UserService, public authService : AuthService) {}

  ngOnInit() {

  }


  logout() {
    this.oidcSecurityService.revokeAccessToken().subscribe((result) => {console.log(result); });
    this.oidcSecurityService.revokeRefreshToken().subscribe((result) => {console.log(result); });
    this.oidcSecurityService.logoff().subscribe((result) => {console.log(result); });
    //this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }

  getuser(){

    //this.authService.getClaims();
    this.userService.get().subscribe((result) => console.log(result));
  
  }
}
