export class ShopTypeModel {
    '_id': string;
    'type': string;
    'type_Id': number;
}

export class CountryListModel{
    'name': string;
    'dial_code': number;
    'code': string;
}

export class ShopModel{
    'shop_name': string;
    'first_name': string;
    'last_name': string;
    'age': number;
    'email': string;
    'location': string;
    'shop_type': ShopTypeModel;
    'ph_no': string;
    'ph_code': string;
    '_id': string;
    'disabled': boolean;
}