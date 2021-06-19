import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListOrdersComponent} from "./orders/list-orders/list-orders.component";
import {ViewAllProductsComponent} from "./products/view-all-products/view-all-products.component";


const routes: Routes = [
  { path: '', component:ViewAllProductsComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent },
  { path: '**', component: ViewAllProductsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
