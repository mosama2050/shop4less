import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {CreateProductsComponent} from "./create-products/create-products.component";
import {DeleteProductsComponent} from "./delete-products/delete-products.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-product', component: CreateProductsComponent },
  { path: 'delete-product', component: DeleteProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
