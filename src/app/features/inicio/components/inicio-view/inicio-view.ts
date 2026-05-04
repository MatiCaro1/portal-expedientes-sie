import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inicio-view',
  standalone: true,
  templateUrl: './inicio-view.html',
  styleUrls: ['./inicio-view.css']
})
export class InicioViewComponent {

  @Input() mensaje!: string;
}
