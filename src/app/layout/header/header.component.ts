import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../common/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  total$: Observable<any>;
  totalProduct$: Observable<any>;
  constructor(public _cartService: CartService) {
    this.total$ = _cartService.total$;
  }

  ngOnInit(): void {
  }

  getcartTotal() {
    
  }
}
