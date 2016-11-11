import {Component, EventEmitter} from '@angular/core';
import { Product } from '../product-row/product.model.ts';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  outputs: ['onProductSelected'],
})

export class ProductsListComponent {
  products: Product[];

  /**
   * @ouput onProductSelected - outputs the current Product
   */
  onProductSelected: EventEmitter<Product>;

  constructor() {
    this.onProductSelected = new EventEmitter();

    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
  }

  selectProduct(product: Product): void {
    this.onProductSelected.emit(product);
  }
}
