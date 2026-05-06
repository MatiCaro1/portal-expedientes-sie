import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer';
import { AuthHeaderComponent } from '../header/auth-header/auth-header';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, AuthHeaderComponent],
  templateUrl: './auth-layout.html',
  styleUrls: ['./auth-layout.css']
})
export class AuthLayoutComponent {}
