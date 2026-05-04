import { Component } from '@angular/core';
import { LogoComponent } from '../../ui/logo/logo';
import { TituloComponent } from '../../ui/titulo/titulo';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  //imports: [LogoComponent, TituloComponent],
  templateUrl: './header.html'
})
export class HeaderComponent {}
