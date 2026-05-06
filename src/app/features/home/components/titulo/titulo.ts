import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  standalone: true,
  templateUrl: './titulo.html',
  styleUrls: ['./titulo.css']
})
export class TituloComponent {

  @Input() mensaje!: string;
}
