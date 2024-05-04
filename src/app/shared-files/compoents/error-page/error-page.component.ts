import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [NzResultModule],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent implements OnInit {
  lastRoute: string = '';

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.lastRoute = event.url;
      console.log('this.lastRoute', this.lastRoute);
    });
  }

  goBackPrevious(){
    this.router.navigateByUrl('/layout/dashboard');
  }

}
