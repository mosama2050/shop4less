import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
//  addNewProduct(form) {
// //   let newProduct = {
// //     id: 15,
// //     categoryId: form.product_category,
// //     productName: form.product_name,
// //     description: form.product_description,
// //     price: form.product_price,
// //     is_available: 1,
// //     rating: form.product_rating,
// //     reviews: form.product_reviews,
// //     color: form.product_color
// //
// // };
//  this.productsService.createproduct(newProduct).subscribe(data =>
//   {
//     console.log(data);
//   });
// }
}
