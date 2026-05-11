import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  icon: string;
  badge?: string;
  subtitle?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  user = {
    name: 'Juan Soto',
    area: 'Fiscalía'
  };

  navItems: NavItem[] = [
    { label: 'Inicio', route: '/app/inicio', icon: 'home' }, //Preseleccionado
    { label: 'Mis Expedientes', route: '/app/expedientes', icon: 'inbox', badge: '3', subtitle: '3 expedientes activos' },
    { label: 'Configuración', route: '/configuracion', icon: 'settings' },
    //{ label: 'Ayuda', route: '/ayuda', icon: 'help' },
    { label: 'Cerrar sesión', route: '/auth/login', icon: 'logout' }
  ];
}
