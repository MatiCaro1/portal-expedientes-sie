import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  //imports: [],
  imports: [RouterOutlet,HeaderComponent, FooterComponent],
  templateUrl: './main-layout.html'
})
export class MainLayoutComponent {}
