import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { UserModel } from './shared/models/security/user.model';

import { AuthModule, LogLevel} from 'angular-auth-oidc-client';

export function tokenGetter() {
  const token = JSON.parse(sessionStorage.getItem("0-testclient")!).authnResult.access_token;
  return token;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: environment.allowedDomainsForJWT,
        disallowedRoutes: []
      }
    }),
    AuthModule.forRoot({
      config: {
        authority: 'https://localhost:5000',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin + '/account/login',
        clientId: 'testclient',
        scope: 'openid profile',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
