import {Component} from '@angular/core';
import { Product } from './product.model.ts';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  inputs: ['product'],
})

export class ProductRowComponent{
  product: Product;
}
