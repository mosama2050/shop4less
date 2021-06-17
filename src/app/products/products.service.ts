import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl: string;

  constructor(private httpClient: HttpClient){
    this.productUrl = 'http://localhost:8080/products';
  }


  public  createproduct(product: any){
   return  this.httpClient.post(this.productUrl,product);
  }

  public  viewproduct(productID: any){
   return  this.httpClient.get(this.productUrl+'/'+productID);
  }


  public updateproduct(productID: any,product: any){
    return  this.httpClient.put(this.productUrl+'/'+productID,product);
  }

  public deleteproduct(productID: any){
    return  this.httpClient.delete(this.productUrl+'/'+productID);
  }

  public  searchCategoryProducts(categoryId: any){
    return  this.httpClient.get(this.productUrl+'/category/'+categoryId);
  }

  public  searchDateProducts(dateprams: any){
    return  this.httpClient.get(this.productUrl+'/category/'+dateprams);
  }
  // public findAll(): Observable<Product[]>{
  //   return this.httpClient.get<Product[]>(this.productUrl);
  // }
}
