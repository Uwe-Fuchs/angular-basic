import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { ShippingPrice } from './shipping-price';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private shippingPricesUrl = 'api/prices';
  cartItems: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  getCartItems(): Product[] {
    return this.cartItems;
  }

  addToCart(product: Product) {
    if (!this.cartItems.includes(product)) {
      this.cartItems.push(product);
    }
  }

  clearCart(): Product[] {
    this.cartItems = [];
    return this.cartItems;
  }

  // getShippingPrices(): Observable<Object> {
  //   return this.http.get('/assets/shipping.json');
  // }

  getShippingPrices(): Observable<ShippingPrice[]> {
    return this.http.get<ShippingPrice[]>(this.shippingPricesUrl);
  }
}
