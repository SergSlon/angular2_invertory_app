import { Component } from '@angular/core';
import {Product} from "./product-row/product.model";

@Component({
  selector: 'inventory-app',
  templateUrl: 'inventory-app.html',
  styleUrls: ['inventory-app.component.css']
})

export class AppComponent {
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
