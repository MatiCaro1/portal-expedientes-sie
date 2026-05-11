import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-inicio',
  templateUrl: './inicio.html'
})
export class Inicio {
  constructor(private router: Router) {}

  irExpedientes() {
    this.router.navigate(['/app/expedientes']);
  }

}
