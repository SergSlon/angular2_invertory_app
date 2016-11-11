import { Component } from '@angular/core';
import {Product} from "../product-row/product.model";

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
  host: {class: 'ui small image'},
  inputs: ['product'],
})
export class ProductImageComponent{
  product: Product;
}
