import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

export type FooterVariant = 'auth' | 'main';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  @Input() variant: FooterVariant = 'main';

  readonly currentYear = new Date().getFullYear();
  readonly systemName = 'Portal Expedientes SIE';
  readonly systemVersion = '1.0.0';
  readonly orgName = 'Superintendecia de Educación';
  readonly siteUrl = 'https://www.supereduc.cl/';
  readonly siteName = 'SIE.cl';

  readonly mainLinks = [
    { label: 'Términos de uso',        href: '/terminos'   },
    { label: 'Política de privacidad', href: '/privacidad' },
    { label: 'Mesa de ayuda',          href: '/ayuda'      },

  ];

  get isMain(): boolean {
    return this.variant === 'main';
  }
  get isAuth(): boolean {
    return this.variant === 'auth';
  }
}
