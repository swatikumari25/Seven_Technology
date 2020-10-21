import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class CartService {
  items=[];
 private cartTotalPrice = new BehaviorSubject<number>(0);
  private total = new BehaviorSubject<number>(0);
  private totalProduct = new BehaviorSubject<any>([]);
  constructor() {     
  }
  get total$(){
    return this.total.asObservable();
  }

  get totalProduct$(){
  return this.totalProduct.asObservable();
}

get cartTotalPrice$(){
  return this.cartTotalPrice.asObservable();
}

calcTotalProduct(){

    return this.items;
  }

  calcTotalPrice() {
    let price = 0;
    this.items.forEach(item => {
      price += parseInt(item.totalprice);
    });
    return price;
  }

  calcTotal(){
    let countOfProduct = 0;
    this.items.map(x => countOfProduct+= x.quantity);
    return countOfProduct;
  }

  removeUpload(uploadItem) {
    let selectedProduct= this.items.findIndex(x=> x.id === uploadItem.id);
    if (selectedProduct !== -1) {
      this.items.splice( selectedProduct, 1 );
    }
    this.total.next(this.calcTotal());
    this.totalProduct.next(this.calcTotalProduct());
    this.cartTotalPrice.next(this.calcTotalPrice());
  }

  addItem(item: any){
    let existingItem = this.items.find(x=> x.id === item.id);
    if(existingItem) {
    let selectedProduct= this.items.findIndex(x=> x.id === item.id);
    this.items[selectedProduct].quantity += 1;
    this.items[selectedProduct].totalprice= this.items[selectedProduct].quantity * this.items[selectedProduct].price
    }
    else {
    this.items.push({"id": item.id,
    "name": item.name,
    "description": item.description,
    "price": item.price,
    "quantity": 1,
    "image": item.image,
    "totalprice":item.price
  });

    }
    this.total.next(this.calcTotal());
    this.totalProduct.next(this.calcTotalProduct());
    this.cartTotalPrice.next(this.calcTotalPrice());
  }



}