import { Component } from '@angular/core';
import {Product} from "../product-row/product.model";

@Component({
  selector: 'product-department',
  inputs: ['product'],
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})

export class ProductDepartmentComponent {
  product: Product;
}
