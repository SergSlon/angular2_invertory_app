import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './inventory-app.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductImageComponent } from './product-image/product-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductRowComponent,
    ProductsListComponent,
    ProductImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
