import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../common/shared.service';
import { Observable } from 'rxjs';
import { CartService } from '../../common/cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productlist: any;
  allProductlist: any;
  totalProduct$: Observable<any>;
  cartTotal$:  Observable<any>;
  constructor(private _shareService: SharedService, private _cartService: CartService) {
    this.allProduct();
    this.totalProduct$ = _cartService.totalProduct$;
    this.cartTotal$ = _cartService.cartTotalPrice$;
  }

  ngOnInit(): void {
  }

  allProduct() {
    this.productlist = this._shareService.DisplayProduct().subscribe((res) => {
      this.allProductlist = res.data;

    })
  }
  addToCart(item) {
    this._cartService.addItem(item);
    console.log(this.cartTotal$);
  }


  removeItem(val) {
    this._cartService.removeUpload(val);
  }
  
    
  
}
