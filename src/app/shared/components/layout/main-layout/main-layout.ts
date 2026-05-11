import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from '../../header/main-header/main-header';
import { FooterComponent } from '../../footer/footer';
import { SidebarComponent } from '../../navigation/sidebar/sidebar';
import { Breadcrumbs } from '../../navigation/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  //imports: [],
  imports: [RouterOutlet, MainHeaderComponent, FooterComponent, SidebarComponent, Breadcrumbs],
  templateUrl: './main-layout.html'
})
export class MainLayoutComponent {}
