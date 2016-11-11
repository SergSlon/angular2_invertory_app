import { Component } from '@angular/core';
import { Product } from './product-row/product-row.model.ts'

@Component({
  selector: 'inventory-app',
  templateUrl: 'inventory-app.html',
  styleUrls: ['inventory-app.component.css']
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
       29.99
    );
  }
}
