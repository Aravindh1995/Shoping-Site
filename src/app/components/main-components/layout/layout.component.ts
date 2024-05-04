import { Component, OnInit } from '@angular/core';
import { SharedImports } from '../../../shared-files/shared-imports';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { Router, RouterOutlet, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SharedImports,
    RouterOutlet,
    SideBarComponent,
    TopBarComponent,
    NgFor
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

  breadcrumbItems: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      // Update breadcrumb items based on route data
      this.updateBreadcrumb(data['breadcrumb']);
    });
  }

  ngOnInit(): void {
   
  }


  updateBreadcrumb(breadcrumbData: string | string[]) {
    if (typeof breadcrumbData === 'string') {
      this.breadcrumbItems = [breadcrumbData];
    } else if (Array.isArray(breadcrumbData)) {
      this.breadcrumbItems = breadcrumbData;
    } else {
      this.breadcrumbItems = [];
    }
  }


}
