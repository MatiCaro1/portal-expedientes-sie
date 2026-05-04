import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.html'
})
export class LogoComponent {
  @Input() src = 'assets/logo.png'; // ruta por defecto
  @Input() alt = 'Logo';
}
