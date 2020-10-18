import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../common/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartTotal:number = 0;
  total$: Observable<any>;
  totalProduct$: Observable<any>;
  constructor(public _cartService: CartService) {
    this.total$ = _cartService.total$;
    this.totalProduct$ = _cartService.totalProduct$;
    // this.cartTotal += 
    this.calcCartTotal();
  
   }

  ngOnInit(): void {
   
  }
  calcCartTotal() {
    this.cartTotal = 0
    this.totalProduct$.forEach(item => {
      this.cartTotal = +(item[0].totalprice);
    })
  }
}
