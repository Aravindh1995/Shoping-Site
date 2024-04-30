import { Component, OnInit, Output } from '@angular/core';
import { ModelComponent } from '../../../shared-files/compoents/model/model.component';
import { ShopService } from '../../../shared-files/services/shop.service';
import { HttpClientModule } from '@angular/common/http';
import { ShopModel, ShopTypeModel } from '../../../shared-files/models/shop.model';
import { LoaderComponent } from '../../../shared-files/compoents/loader/loader.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [ModelComponent, HttpClientModule, LoaderComponent, NgIf],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent implements OnInit{
  // shoptypeList: Array<ShopTypeModel> = [];
  modelShow: boolean = false;
  selectedData: any;
  listShops: Array<ShopModel> = [];

  constructor(private shopService: ShopService){}

  ngOnInit(): void {
    this.shopList();
  }

  shopList(){
    this.shopService.getShopList().subscribe((data)=>{
      this.listShops = data;
    })
  }

  showModel(data?: any){
    this.modelShow = true;
    if(data){
      this.selectedData = data;
    }
  }

  closePop(value:boolean){
    this.modelShow = value;
  }

}
