import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { CartService } from '../../common/cart.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  cartTotal:number = 0;
 totalProduct$: Observable<any>;
  constructor( private cartservice: CartService) {
        this.totalProduct$ = cartservice.totalProduct$;
    // this.cartTotal += 
    this.calcCartTotal();
   }

  ngOnInit(): void {
  }
  calcCartTotal() {
      this.totalProduct$.forEach(item => {
        // for (let i = 0; i < item.length; i++) {    
          this.cartTotal += parseInt(item.totalprice)
        // }
      })
    }

}
