import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-header.html',
  styleUrl: './auth-header.css'
})
export class AuthHeaderComponent {
  readonly logoUrl = '/assets/images/logo_SIE_blanco.png';
}
