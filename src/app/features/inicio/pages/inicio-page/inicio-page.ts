import { Component } from '@angular/core';
import { ViewComponent } from '../../components/view/view';

@Component({
  standalone: true,
  selector: 'app-inicio-page',
  imports: [ViewComponent],
  templateUrl: './inicio-page.html'
})
export class InicioPage {

  mensaje = 'Cargando...';

  ngOnInit() {
    this.mensaje = 'Bienvenido al Portal de Expedientes';
  }
}
