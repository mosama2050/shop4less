import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {CreateProductsComponent} from "./create-products/create-products.component";
import {DeleteProductsComponent} from "./delete-products/delete-products.component";
import {ViewProductsComponent} from "./view-products/view-products.component";
import {ViewAllProductsByCategoryComponent} from "./view-all-products-by-category/view-all-products-by-category.component";
import {ViewAllProductsByDateComponent} from "./view-all-products-by-date/view-all-products-by-date.component";
import {UpdateProductsComponent} from "./update-products/update-products.component";
import {ViewAllProductsComponent} from "./view-all-products/view-all-products.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'create', component: CreateProductsComponent },
  { path: 'product/:id', component: ViewProductsComponent},
  { path: 'category/:id', component:  ViewAllProductsByCategoryComponent},
  { path: 'search', component: ViewAllProductsByDateComponent},
  { path: 'delete/:id', component:  DeleteProductsComponent},
  { path: 'update/:id', component: UpdateProductsComponent},
  { path: 'list-products', component: ViewAllProductsComponent},
  { path: '**', component: ViewAllProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  HttpClientModule
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
