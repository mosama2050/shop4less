import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductsComponent,
    UpdateProductsComponent,
    ViewProductsComponent,
    ViewAllProductsComponent,
    DeleteProductsComponent,
    ViewAllProductsByDateComponent,
    ViewAllProductsByCategoryComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule
    ]
})
export class ProductsModule { }
