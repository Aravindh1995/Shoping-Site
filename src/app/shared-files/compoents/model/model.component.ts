import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShopService } from '../../services/shop.service';
import { ShopTypeModel, CountryListModel } from '../../models/shop.model';
import { ShopListComponent } from '../../../components/features/shop-list/shop-list.component';
// import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent implements OnInit{

  @Input() open: any;
  @Input() selectedObject:any;
  @Output() closePop: EventEmitter<boolean> = new EventEmitter<boolean>();
  // @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  // @ViewChild('shopListComponent', {static: false}) shopListComponent!: ShopListComponent;
  createShopForm!: FormGroup;
  shoptypeList: Array<ShopTypeModel> = [];
  countryList: Array<CountryListModel> = [];
  countryCode: string = '+91';

  constructor(private fb: FormBuilder, private shopService: ShopService){
    console.log('this.getSelectedData', this.selectedObject);
  }

  ngOnInit(){
    console.log('this.getSelectedData', this.selectedObject);
    this.shopTypeList();
    this.createShopGroup();
    this.getCountryList();
    this.createShopForm.patchValue({
      shop_name: this.selectedObject?.shop_name,
      first_name: this.selectedObject?.first_name,
      last_name: this.selectedObject?.last_name,
      age: this.selectedObject?.age,
      email: this.selectedObject?.email,
      location: this.selectedObject?.location,
      shop_type: this.selectedObject?.shop_type,
      ph_no: this.selectedObject?.ph_no,
    });
  }

  createShopGroup(){
    this.createShopForm = this.fb.group({
      shop_name: [''],
      first_name: [''],
      last_name: [''],
      age: [''],
      email: [''],
      location: [''],
      shop_type: [''],
      ph_no: [''],
      // owner_name: [''],
      // shop_name, full_name, first_name, last_name, age, email, location, banner_image, logo_image
    })
  }

  getCountryList(){
    this.shopService.getCountryList().subscribe((data)=>{
      this.countryList = data;
    })
  }

  shopTypeList(){
    this.shopService.getShopTypes().subscribe((data)=>{
      // console.log('data', data);
      this.shoptypeList = data;
    })
  }

  submitForm(){
    this.createShopForm.value.ph_no = this.countryCode + this.createShopForm.value.ph_no;
    // console.log(this.createShopForm.value);
    this.shopService.createShopCreate(this.createShopForm.value).subscribe((data)=>{
      // console.log('data', data);
      if(data){
        this.closePop.emit(false);
      }
    })
  }

  close() { // --- popup close method --- //
    this.closePop.emit(false);
  }

}
