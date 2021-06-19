import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  constructor(private  activatedRoute : ActivatedRoute, private productsService : ProductsService) { }
  productId = 0 ;
  // @ts-ignore
  productDetails : Product;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data);
      this.productId=data.id;
      this.productsService.viewproduct(this.productId).subscribe(data =>{
        this.productDetails = data;
      });

    });
  }

  updateProduct(form: any) {
    const updateProduct = {
      id: this.productId,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      product_img: 'http://localhost:4200/assets/z.png',
      is_available: form.value.product_isAvailable,
      color: form.value.product_color,
      reviews: form.value.product_reviews
    }
    console.log(form);
    this.productsService.updateproduct(this.productId,updateProduct).subscribe(data =>{
      console.log(data);
    });
  }
}
