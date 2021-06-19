import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  // @ts-ignore
  addNewProduct(form){
   const product: Product =<Product><unknown>{
     id: 13,
     categoryId: form.value.product_category,
     productName: form.value.product_name,
     description: form.value.product_description,
     rating: form.value.product_rating,
     price: form.value.product_price,
     product_img: 'http://localhost:4200/assets/z.png',
     isAvailable: 1,
     color: form.value.product_color,
     reviews: form.value.product_reviews
   }



    console.log(product);

    this.productsService.createproduct(product).subscribe(data =>{
      console.log(data);
    });
  }

}
