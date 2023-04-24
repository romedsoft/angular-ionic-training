import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './shared/guards/auth.guard';
import { UnAuthGuard } from './shared/guards/unauth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate : [AuthorizationGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'account/login',
    canActivate : [UnAuthGuard],
    loadChildren: () => import('./account/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account/registration',
    canActivate : [UnAuthGuard],
    loadChildren: () => import('./account/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'account/forgot-password',
    loadChildren: () => import('./account/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
