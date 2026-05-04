import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  standalone: true,
  templateUrl: './titulo.html'
})
export class TituloComponent {
  @Input() texto = '';
}
