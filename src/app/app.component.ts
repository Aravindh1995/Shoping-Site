import { Router, RouterOutlet } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
// import { SharedImports } from './shared-files/shared-imports';
import { LocationStrategy } from '@angular/common';
import { LoginService } from './shared-files/services/auth.service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { SideBarComponent } from './components/main-components/side-bar/side-bar.component';
// import { TopBarComponent } from './components/main-components/top-bar/top-bar.component';
// import { LoginComponent } from './components/authendication-components/login/login.component';
// import { RegisterComponent } from './components/authendication-components/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NzLayoutModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router, private location: LocationStrategy) {
  }

  ngOnInit(): void {
  }

  // @HostListener('window:popstate', ['$event'])
  // onPopState(event: any) {
  //   let token = localStorage.getItem('token');
  //   if (token != null) {
  //     this.router.navigateByUrl('layout');
  //   } else {
  //     this.router.navigateByUrl('login');
  //   }
  // }

}

