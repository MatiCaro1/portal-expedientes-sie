import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule
} from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumbs.html',
  styleUrls: ['./breadcrumbs.css']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  // Primera carga
  this.breadcrumbs = this.buildBreadcrumbs(this.route.root);

  // Cambios de navegación
  this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => {

      this.breadcrumbs = this.buildBreadcrumbs(this.route.root);

    });

}

  private buildBreadcrumbs(
  route: ActivatedRoute,
  url: string = '',
  breadcrumbs: any[] = []
): any[] {

  for (const child of route.children) {

    const routeURL = child.snapshot.url
      .map(segment => segment.path)
      .join('/');

    if (routeURL) {
      url += `/${routeURL}`;
    }

    const label = child.snapshot.data['breadcrumb'];

    if (label) {
      breadcrumbs.push({
        label,
        route: url
      });
    }

    this.buildBreadcrumbs(
      child,
      url,
      breadcrumbs
    );
  }

  return breadcrumbs;
}

}
