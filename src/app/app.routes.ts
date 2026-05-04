import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './shared/components/layout/auth-layout/auth-layout';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout';

import { LoginPage } from './features/login/pages/login-page/login-page';
import { InicioPage } from './features/inicio/pages/inicio-page/inicio-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // 🔐 AUTH
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPage
      }
    ]
  },

  // 🏠 APP
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'inicio',
        component: InicioPage
      }
    ]
  }
];
