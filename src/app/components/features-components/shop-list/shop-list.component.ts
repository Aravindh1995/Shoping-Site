import { Component, OnInit, Output } from '@angular/core';
import { ModelComponent } from '../../../shared-files/compoents/model/model.component';
import { ShopService } from '../../../shared-files/services/shop.service';
import { HttpClientModule } from '@angular/common/http';
import { ShopModel, ShopTypeModel } from '../../../shared-files/models/shop.model';
import { LoaderComponent } from '../../../shared-files/compoents/loader/loader.component';
import { NgIf, NgFor } from '@angular/common';
import { popupClose } from '../../../shared-files/models/shop.interface';
import { SharedImports } from '../../../shared-files/shared-imports';

import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';


@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [ModelComponent, HttpClientModule, LoaderComponent, NgIf, NgFor, SharedImports],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent implements OnInit {
  // shoptypeList: Array<ShopTypeModel> = [];
  modelShow: boolean = false;
  deleteModel: { model: boolean, _id: string } = { model: false, _id: '' };
  selectedData: any;
  // listShops: Array<ShopModel> = [];
  triggerLoader: boolean = false;

  checked = false;
  loading = false;
  indeterminate = false;
  // listShops: Array<ShopModel> = [];
  listShops: readonly ShopModel[] = [];
  listOfCurrentPageData: readonly ShopModel[] = [];
  setOfCheckedId = new Set<number>();


  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopList();
  }

  shopList() {
    this.shopService.getShopList().subscribe((data) => {
      this.listShops = data;
    })
  }

  showModel(data?: any) {
    this.modelShow = true;
    if (data) {
      this.selectedData = data;
    }else{
      this.selectedData = '';
    }
  }

  closePop(value?: popupClose) {
    this.selectedData = [];
    switch (value?.value1) {
      case 1: {
        this.modelShow = false;
        break;
      }
      case 2: {
        //statements;
        this.deleteModel = { model: false, _id: '' };
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
    if(value?.value2 == 'Success'){
      this.shopList();
    }
  }

  deleteSelectedId(id: string) {
    this.deleteModel = { model: true, _id: id };
  }





}
