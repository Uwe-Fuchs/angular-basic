import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[];
  customerName: string;
  customerAddress: string;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartItems = this.cartService.clearCart();
  }

  submit(customerData): void {
    // Process checkout data here
    this.clearCart();
    console.info(`Your order has been submitted! Name: ${this.customerName}, Address: ${this.customerAddress}`);
  }
}
