import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private  activatedRoute : ActivatedRoute) { }

  productId = 0 ;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data);
      this.productId=data.id;
    });
  }

}
