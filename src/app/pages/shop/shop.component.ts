import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../common/shared.service';
import { CartService } from '../../common/cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productlist: any;
  allProductlist: any;
  cartTotal = [];
  constructor(private _shareService: SharedService, private _cartService: CartService) {
    this.allProduct();
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
  }
}
