import { Component } from '@angular/core';
import { InicioViewComponent } from '../../components/inicio-view/inicio-view';
import { MainLayoutComponent } from '@shared/components/layout/main-layout/main-layout';

@Component({
  standalone: true,
  selector: 'app-inicio-page',
  imports: [InicioViewComponent, MainLayoutComponent], // 👈 AQUÍ
  templateUrl: './inicio-page.html'
})
export class InicioPage {

  mensaje = 'Cargando...';

  ngOnInit() {
    this.mensaje = 'Bienvenido al Portal de Expedientes';
  }
}
