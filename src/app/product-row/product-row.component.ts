import {Component, Input} from '@angular/core';
import { Product } from '../product-row/product-row.model.ts';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})

export class ProductRowComponent{
  @Input() product: Product;
}
