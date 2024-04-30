// import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    FormsModule,
    // HttpClientModule,
    CommonModule,
    RouterOutlet, RouterLink, RouterLinkActive
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit{
  sidebarVisible: boolean = false;
  sideMenu: any = [
    { name: 'Dashboard', routes: 'dashboard'},
    { name: 'List of Shops', routes: 'shop-list' },
    { name: 'Sold Products', routes: 'arrived-sold' },
  ];

  constructor(){}

  ngOnInit(): void {
    
  }


}
