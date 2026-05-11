import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css'
})
export class MainHeaderComponent {
  readonly logoUrl = '/assets/images/logo_SIE_blanco.png';
  readonly systemName = 'Portal Expedientes SIE';
}
