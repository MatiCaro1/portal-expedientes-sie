import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './shared/components/layout/auth-layout/auth-layout';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout';

import { Login } from './features/login/login';
import { Inicio } from './features/home/inicio/inicio';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  // 🔐 AUTH
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: Login
      }
    ]
  },

  // 🏠 APP
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      {
        path: 'inicio',
        component: Inicio
      }
    ]
  }
];
