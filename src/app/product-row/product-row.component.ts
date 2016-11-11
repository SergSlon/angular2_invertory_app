import {Component} from '@angular/core';
import { Product } from './product.model.ts';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  inputs: ['product'],
  host: {'class': 'item'},
})

export class ProductRowComponent{
  product: Product;
}
