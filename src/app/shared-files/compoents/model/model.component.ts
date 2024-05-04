import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShopService } from '../../services/shop.service';
import { ShopTypeModel, CountryListModel } from '../../models/shop.model';
// import { ShopListComponent } from '../../../components/features/shop-list/shop-list.component';
import { SharedService } from '../../services/shared.service';
// import { EventEmitter } from 'node:stream';
import { popupClose } from '../../models/shop.interface'
import { SharedImports } from '../../shared-imports';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedImports],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent implements OnInit {

  @Input() showForm: any;
  @Input() deleteOpen: any;
  @Input() selectedObject: any;
  @Output() closePop: EventEmitter<popupClose> = new EventEmitter<popupClose>();
  @ViewChild('inputElement', { static: false }) inputElement!: ElementRef;
  createShopForm!: FormGroup;
  shoptypeList: Array<ShopTypeModel> = [];
  countryList: Array<CountryListModel> = [];
  countryCode: string = '+91';
  enterNumber = '';

  constructor(private fb: FormBuilder, private shopService: ShopService, private sharedService: SharedService, private notification: NzNotificationService) { }

  ngOnChanges() {
    // console.log('this.selectedObject', this.selectedObject);
    this.createShopGroup();
  }

  ngOnInit() {
    this.shopTypeList();
    this.getCountryList();
    this.createShopGroup();
  }

  createShopGroup() {
    this.createShopForm = this.fb.group({
      shop_name: [this.selectedObject?.shop_name || ''],
      first_name: [this.selectedObject?.first_name || ''],
      last_name: [this.selectedObject?.last_name || ''],
      age: [this.selectedObject?.age || ''],
      email: [this.selectedObject?.email || ''],
      location: [this.selectedObject?.location || ''],
      shop_type: [this.selectedObject?.shop_type || ''],
      ph_no: [this.selectedObject?.ph_no || ''],
      ph_code: [this.selectedObject?.ph_code || ''],
      // owner_name: [''],
      // shop_name, full_name, first_name, last_name, age, email, location, banner_image, logo_image
    })
  }

  getCountryList() {
    this.shopService.getCountryList().subscribe((data) => {
      this.countryList = data;
    })
  }

  shopTypeList() {
    this.shopService.getShopTypes().subscribe((data) => {
      // console.log('data', data);
      this.shoptypeList = data;
    })
  }

  submitForm() {
    // this.createShopForm.value.ph_no = this.countryCode + this.createShopForm.value.ph_no;
    // console.log(this.createShopForm.value);
    this.sharedService.setData(true);
    setTimeout(() => {
      if (this.selectedObject) {
        this.createShopForm.value.id = this.selectedObject?._id
        this.shopService.updateShopCreate(this.createShopForm.value).subscribe((data) => {
          if (data) {
            const values: popupClose = {
              value1: 1,
              value2: 'Success',
            };
            this.closePop.emit(values);
            this.sharedService.setData(false);
            this.notification.blank('Update Shop', 'Successfully Updated the shop details')
            .onClick.subscribe(() => {
              console.log('notification clicked!');
            });
          }
        }, (err) => {
          if (err) {
            this.sharedService.setData(false);
          }
        })
      } else {
        this.shopService.createShopCreate(this.createShopForm.value).subscribe((data) => {
          if (data) {
            const values: popupClose = {
              value1: 1,
              value2: 'Success',
            };
            this.closePop.emit(values);
            this.sharedService.setData(false);
            this.notification.blank('Added Shop', 'Successfully Added the shop details')
            .onClick.subscribe(() => {
              console.log('notification clicked!');
            });
          }
        }, (err) => {
          if (err) {
            this.sharedService.setData(false);
          }
        })
      }

    }, 1000)

  }

  close(closePopUp: number) { // --- popup close method --- //
    const values: popupClose = {
      value1: closePopUp,
      value2: '',
    };
    this.closePop.emit(values);
  }

  deleteShop() {
    console.log('deleteOpen', this.deleteOpen);
    this.sharedService.setData(true);
    this.shopService.deleteShop(this.deleteOpen?._id).subscribe((data) => {
      setTimeout(() => {
        if (data) {
          this.sharedService.setData(false);
          const values: popupClose = {
            value1: 2,
            value2: 'Success',
          };
          this.closePop.emit(values);
          this.notification.blank('Delete Shop', 'Successfully Deleted Selected Shop')
          .onClick.subscribe(() => {
            console.log('notification clicked!');
          });
        }
      }, 1000)
    })
  }



}


