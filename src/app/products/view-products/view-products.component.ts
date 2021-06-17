import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private  activatedRoute : ActivatedRoute , private  productservice : ProductsService) { }

  productId = 0 ;


  product: Product =<Product>{};
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data);
      this.productId=data.id;


    });

  this.productservice.viewproduct(this.productId).subscribe(date=>{this.product=date});
  }

}
