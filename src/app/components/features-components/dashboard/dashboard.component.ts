import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SharedImports } from '../../../shared-files/shared-imports';
import { CurrencyPipe, NgFor, TitleCasePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedImports, NgFor, PercentPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  listofCarts: any = [
    { name: 'Sales', section: 'Today', img: 'icon-cart.png', count: 124, percent: 20 },
    { name: 'Revenue', section: 'This Month', img: 'icon-dollar.png', count: 3264, percent: 8 },
    { name: 'Customers', section: 'This Year', img: 'icon-customers.png', count: 1244, percent: 12 },
  ];
//   private _currencyPipe2: CurrencyPipe;

//   constructor(@Inject(LOCALE_ID) private locale: string) { 
//     this._currencyPipe2= new CurrencyPipe(this.locale); 
//  }
 
//  setcurrency(value: any) { 
//     return this._currencyPipe2.transform(value); 
//  }

}
