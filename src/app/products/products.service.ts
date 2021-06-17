import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl: string;

  constructor(private httpClient: HttpClient){
    this.productUrl = 'http://localhost:8080/products';
  }


  public  createproduct(product: any) :Observable<Product>{
   return  this.httpClient.post<Product>(this.productUrl,product);
  }

  public  viewproduct(productID: any):Observable<Product>{
   return  this.httpClient.get <Product>(this.productUrl+'/'+productID);
  }


  public updateproduct(productID: any,product: any):Observable<Product>{
    return  this.httpClient.put<Product>(this.productUrl+'/'+productID,product);
  }

  public deleteproduct(productID: any):Observable<Product>{
    return  this.httpClient.delete<Product>(this.productUrl+'/'+productID);
  }

  public  searchCategoryProducts(categoryId: any):Observable<Product>{
    return  this.httpClient.get<Product>(this.productUrl+'/category/'+categoryId);
  }

  public  searchDateProducts(dateprams: any){
    return  this.httpClient.get(this.productUrl+'/category/'+dateprams);
  }
  // public findAll(): Observable<Product[]>{
  //   return this.httpClient.get<Product[]>(this.productUrl);
  // }
}
