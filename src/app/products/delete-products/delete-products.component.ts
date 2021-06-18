import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  constructor(private  routs :Router) { }

  ngOnInit(): void {
  }

  Delete() {
    this.routs.navigateByUrl('/');
  }

  cancel() {
    this.routs.navigateByUrl('/');
  }
}
