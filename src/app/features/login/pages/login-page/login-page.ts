import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPage {

  constructor(private router: Router) {}

  irInicio() {
    this.router.navigate(['/inicio']);
  }
}
