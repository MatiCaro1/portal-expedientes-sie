import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from '../header/main-header/main-header';
import { FooterComponent } from '../footer/footer';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  //imports: [],
  imports: [RouterOutlet, MainHeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './main-layout.html'
})
export class MainLayoutComponent {}
