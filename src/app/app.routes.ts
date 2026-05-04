import { Routes } from '@angular/router';

export const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/inicio/pages/inicio-page/inicio-page')
        .then(m => m.InicioPage)
  }
];
