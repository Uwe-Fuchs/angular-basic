import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ShippingPrice } from './shipping-price';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const prices: ShippingPrice[] = [
      {
        type: "Overnight",
        price: 25.99
      },
      {
        type: "2-Day",
        price: 9.99
      },
      {
        type: "Postal",
        price: 2.99
      }
    ];

    return {prices};
  }
}
