import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './auth-layout.html',
  styleUrls: ['./auth-layout.css']
})
export class AuthLayoutComponent {}
