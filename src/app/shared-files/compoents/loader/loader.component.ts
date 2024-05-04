import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit{

  // loader: boolean = false;
  @Input() loader: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.data$.subscribe(data => {
      this.loader = data
    });
  }

}
