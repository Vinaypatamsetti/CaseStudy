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
    return this.http.get<Product[]>(`${this.apiServerUrl}/products/getAllProducts`);
  }

  
public   getProduct(name: string): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/products/getProductByName/${name}`);
  }
}
