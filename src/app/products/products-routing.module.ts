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

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-products', component: CreateProductsComponent },
  { path: 'products/:id', component: ViewProductsComponent},
  { path: 'category/:id', component:  ViewAllProductsByCategoryComponent},
  { path: 'search', component: ViewAllProductsByDateComponent},
  { path: 'delete-product/:id', component:  DeleteProductsComponent},
  { path: 'update-product/:id', component: UpdateProductsComponent},
  { path: 'list-products', component: ViewAllProductsComponent},
  { path: '**', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
