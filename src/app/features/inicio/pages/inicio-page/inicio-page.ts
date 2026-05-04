import { Component } from '@angular/core';
import { ViewComponent } from '../../components/view/view';
import { MainLayoutComponent } from '@shared/components/layout/main-layout/main-layout';

@Component({
  standalone: true,
  selector: 'app-inicio-page',
  imports: [ViewComponent, MainLayoutComponent], // 👈 AQUÍ
  templateUrl: './inicio-page.html'
})
export class InicioPage {

  mensaje = 'Cargando...';

  ngOnInit() {
    this.mensaje = 'Bienvenido al Portal de Expedientes';
  }
}
