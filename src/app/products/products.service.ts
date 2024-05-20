import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product-detail/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api = "http://localhost:3000/products";

  //Inject the HttpClient object to the constructor
  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    //make a GET call to "http://localhost:3000/products" 
    //replace of() with relevant data returned by the API
    return this.http.get<Product[]>(this.api);
  }
}
