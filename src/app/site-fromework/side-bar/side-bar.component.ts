import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../products/products.service";
import {Category} from "../category";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private productsService : ProductsService) { }

  // @ts-ignore
  categories : Category[];
  ngOnInit(): void {
    this.productsService.getallcategory().subscribe(data =>{
    console.log(data);
    this.categories =data;
    });
  }

}
