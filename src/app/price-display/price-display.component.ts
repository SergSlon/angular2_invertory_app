import { Component } from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css'],
  inputs: ['price'],
})

export class PriceDisplayComponent {
  price: number;
}
