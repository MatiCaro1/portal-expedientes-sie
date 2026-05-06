import { Component } from '@angular/core';
import { TituloComponent } from '../components/titulo/titulo';

@Component({
  standalone: true,
  selector: 'app-inicio-page',
  imports: [TituloComponent],
  templateUrl: './inicio.html'
})
export class Inicio {

  mensaje = 'Cargando...';

  ngOnInit() {
    this.mensaje = 'Bienvenido al Portal de Expedientes';
  }
}
