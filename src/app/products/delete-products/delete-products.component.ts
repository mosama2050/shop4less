import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from "../products.service";
@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  constructor(private  routs :Router,private  activatedRoute : ActivatedRoute, private productsService : ProductsService) { }
  productId = 0 ;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data);
      this.productId=data.id;


    });
  }

  Delete() {

      this.productsService.deleteproduct(this.productId).subscribe(data =>{
       console.log("delete " + this.productId)
      });

    this.routs.navigateByUrl('/');
  }

  cancel() {
    this.routs.navigateByUrl('/');
  }
}
