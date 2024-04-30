import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  loader: boolean = false;

}
