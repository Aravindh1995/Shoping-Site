import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideBarComponent, TopBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'shop';
}

