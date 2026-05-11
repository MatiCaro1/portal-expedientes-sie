import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './shared/components/layout/auth-layout/auth-layout';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout';

import { Login } from './features/login/login';

import { Inicio } from './features/home/inicio/inicio';

import { MisExpedientes } from './features/expedientes/mis-expedientes/mis-expedientes';

import { VerExpediente } from './features/expedientes/ver-expediente/ver-expediente';
/*
import { Actuaciones } from './features/expedientes/actuaciones/actuaciones';
import { Documentos } from './features/expedientes/documentos/documentos';
import { Relaciones } from './features/expedientes/relaciones/relaciones';
import { Poderes } from './features/expedientes/poderes/poderes';
*/
export const routes: Routes = [

  // =====================================================
  // REDIRECT
  // =====================================================

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  // =====================================================
  // AUTH
  // =====================================================

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

  // =====================================================
  // APP
  // =====================================================

  {
    path: 'app',
    component: MainLayoutComponent,

    children: [

      // -------------------------------------------------
      // INICIO
      // -------------------------------------------------

      {
        path: 'inicio',
        component: Inicio,
        data: {
          breadcrumb: '🏠 Inicio'
        }
      },

      // -------------------------------------------------
      // MIS EXPEDIENTES
      // -------------------------------------------------

      {
        path: 'expedientes',
        component: MisExpedientes,
        data: {
          breadcrumb: 'Mis Expedientes'
        }
      },

      // -------------------------------------------------
      // VER EXPEDIENTE
      // -------------------------------------------------

      {
        path: 'verExpediente',
        component: VerExpediente,

        data: {
          breadcrumb: 'Expediente'
        }/*,

        children: [

          {
            path: '',
            redirectTo: 'actuaciones',
            pathMatch: 'full'
          },

          {
            path: 'actuaciones',
            component: Actuaciones,
            data: {
              breadcrumb: 'Actuaciones'
            }
          },

          {
            path: 'documentos',
            component: Documentos,
            data: {
              breadcrumb: 'Documentos'
            }
          },

          {
            path: 'relaciones',
            component: Relaciones,
            data: {
              breadcrumb: 'Relaciones'
            }
          },

          {
            path: 'poderes',
            component: Poderes,
            data: {
              breadcrumb: 'Poderes'
            }
          }

        ]*/
      }
    ]
  }

];
