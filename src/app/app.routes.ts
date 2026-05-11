import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './shared/components/layout/auth-layout/auth-layout';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout';

import { Login } from './features/login/login';

import { Inicio } from './features/home/inicio/inicio';
import { Expedientes } from './features/expedientes/expedientes';
/*
import { VerExpediente } from './features/expedientes/ver-expediente/ver-expediente';

import { Actuaciones } from './features/expedientes/ver-expediente/actuaciones/actuaciones';
import { Documentos } from './features/expedientes/ver-expediente/documentos/documentos';
import { Relaciones } from './features/expedientes/ver-expediente/relaciones/relaciones';
import { Poderes } from './features/expedientes/ver-expediente/poderes/poderes';

import { VerDocumento } from './features/expedientes/ver-expediente/documentos/ver-documento/ver-documento';
*/
export const routes: Routes = [

  // =========================================================
  // REDIRECT
  // =========================================================

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  // =========================================================
  // AUTH
  // =========================================================

  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [

      {
        path: 'login',
        component: Login,
        data: {
          breadcrumb: 'Login'
        }
      }

    ]
  },

  // =========================================================
  // APP
  // =========================================================

  {
    path: 'app',
    component: MainLayoutComponent,
    children: [

      // -----------------------------------------------------
      // HOME
      // -----------------------------------------------------

      {
        path: 'inicio',
        component: Inicio,
        data: {
          breadcrumb: '🏠 Inicio'
        }
      },

      // -----------------------------------------------------
      // EXPEDIENTES
      // -----------------------------------------------------

      {
        path: 'expedientes',
        component: Expedientes,
        data: {
          breadcrumb: 'Mis Expedientes'
        }
      },

      // -----------------------------------------------------
      // VER EXPEDIENTE
      // -----------------------------------------------------
/*
      {
        path: 'verExpediente',
        component: VerExpediente,
        data: {
          breadcrumb: 'Expediente'
        },

        children: [

          // INDEX TAB
          {
            path: '',
            redirectTo: 'actuaciones',
            pathMatch: 'full'
          },

          // ACTUACIONES
          {
            path: 'actuaciones',
            component: Actuaciones,
            data: {
              breadcrumb: 'Actuaciones'
            }
          },

          // DOCUMENTOS
          {
            path: 'documentos',
            component: Documentos,
            data: {
              breadcrumb: 'Documentos'
            }
          },

          // VER DOCUMENTO
          {
            path: 'documentos/verDocumento',
            component: VerDocumento,
            data: {
              breadcrumb: 'Ver Documento'
            }
          },

          // RELACIONES
          {
            path: 'relaciones',
            component: Relaciones,
            data: {
              breadcrumb: 'Relaciones'
            }
          },

          // PODERES
          {
            path: 'poderes',
            component: Poderes,
            data: {
              breadcrumb: 'Poderes'
            }
          }

        ]
      }
*/
    ]
  },

  // =========================================================
  // FALLBACK
  // =========================================================

  {
    path: '**',
    redirectTo: 'auth/login'
  }

];
