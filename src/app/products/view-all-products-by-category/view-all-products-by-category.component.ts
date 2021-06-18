import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  constructor(private  activatedRoute : ActivatedRoute , private  productservice : ProductsService) { }

  productId = 0 ;

  products: Product[] | undefined;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{

      this.productId=data.id;
      this.productservice.searchCategoryProducts(this.productId).subscribe(res=>{
        this.products=res
      });

    });


  }
}
