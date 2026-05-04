import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  //imports: [],
  imports: [HeaderComponent, FooterComponent], // 👈 obligatorio
  templateUrl: './main-layout.html'
})
export class MainLayoutComponent {}
