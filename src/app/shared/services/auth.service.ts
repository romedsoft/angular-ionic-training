import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EnvironmentUrlService } from './enviroment-url.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private oidcSecurityService: OidcSecurityService ) { }


  getClaims(){
    debugger;
    let userData = this.oidcSecurityService.getUserData().subscribe((result) => console.log(result));;
    console.log(userData);
  }

}
