import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-view',
  templateUrl: './view.html'
})
export class ViewComponent {
  @Input() mensaje = '';
}
