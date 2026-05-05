import { Component } from '@angular/core';
import { InicioViewComponent } from '../../components/inicio-view/inicio-view';

@Component({
  standalone: true,
  selector: 'app-inicio-page',
  imports: [InicioViewComponent],
  templateUrl: './inicio-page.html'
})
export class InicioPage {

  mensaje = 'Cargando...';

  ngOnInit() {
    this.mensaje = 'Bienvenido al Portal de Expedientes';
  }
}
