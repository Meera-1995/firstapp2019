import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  deleteProduct(id: number) {
    return this.http.delete(this.baseUrl+'/products/'+id)
  }

  private baseUrl="http://localhost:58639/api"

  constructor(private http:HttpClient) {}
    GetProductList():Observable<any>
    {
      return this.http.get(this.baseUrl+'/products')
    }
   AddProducts(products:Product)
   {
    return this.http.post(this.baseUrl+'/products',products)
   }
   updateProduct(id:number,product:Product):Observable<any>
   {
    return this.http.put(this.baseUrl+'/products/'+id,product)
   }
   GetProduct(id:number):Observable<any>
   {
    return this.http.get(this.baseUrl+'/products/'+id)
   }
   
}
