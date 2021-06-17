import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-all-products-by-date',
  templateUrl: './view-all-products-by-date.component.html',
  styleUrls: ['./view-all-products-by-date.component.css']
})
export class ViewAllProductsByDateComponent implements OnInit {
  constructor(private  activatedRoute : ActivatedRoute) { }

  saarchDate = 0 ;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data);
      this.saarchDate=data.date;
    });
  }

}
