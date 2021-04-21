import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
   
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  

  public getAllProducts(): Observable<Product[]>{
    console.log("all products");
    
    return this.http.get<Product[]>(`${this.apiServerUrl}/products/getAllProducts`);
  }

  
public   getProduct(name: string): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/products/getProductByName/${name}`);
  }

 public getProductById(id:number):Observable<any>{
  return this.http.get(`${this.apiServerUrl}/products/getProductById/${id}`);
 } 

  public addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.apiServerUrl}/products/addProduct`,product);
  }

  public deleteProductById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/products/deleteProductById/${id}`);
  }

  public updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiServerUrl}/products/updateProduct`,product)
  }
}
