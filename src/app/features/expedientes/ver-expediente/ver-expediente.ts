import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpedienteTabs } from '../expediente-tabs/expediente-tabs';

@Component({
  selector: 'app-ver-expediente',
  imports: [RouterOutlet,ExpedienteTabs],
  templateUrl: './ver-expediente.html',
  styleUrl: './ver-expediente.css',
})
export class VerExpediente {}
