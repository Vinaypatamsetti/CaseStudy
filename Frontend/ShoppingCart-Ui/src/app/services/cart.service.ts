import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { CartItem } from '../models/cart-item';

import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  // constructor(private http: HttpClient) { }

  // getCartItems(): Observable<CartItem[]> {
  //   //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
  //   return this.http.get<CartItem[]>(cartUrl).pipe(
  //     map((result: any[]) => {
  //       let cartItems: CartItem[] = [];

  //       for (let item of result) {
  //         let productExists = false

  //         for (let i in cartItems) {
  //           if (cartItems[i].productId === item.product.id) {
  //             cartItems[i].qty++
  //             productExists = true
  //             break;
  //           }
  //         }

  //         if (!productExists) {
  //           cartItems.push(new CartItem(item.id, item.product));
  //         }
  //       }

  //       return cartItems;
  //     })
  //   );
  // }

  // addProductToCart(product: Product): Observable<any> {
  //   return this.http.post(cartUrl, { product });
  // }

  generateCart(id:number):Observable<any>{
    console.log("came to service");
    return this.http.post<any>(`${this.apiServerUrl}/carts/addCartWith/${id}`,id);
  }
 
  public getCartWithId(id:number): Observable<any>{
    
    return this.http.get<any>(`${this.apiServerUrl}/carts/getCartBy/${id}`);
  } 
  
  public addProductToCart(CId:number,PId:number):Observable<any>{
    console.log("in add to product service");
    
    return this.http.post<any>(`${this.apiServerUrl}/carts/addProductToCart/${CId}/${PId}`,{CId,PId});
  }

  public deleteItemInCart(CId:number,Id:number):Observable<any>{
    console.log("in service of delete item");
    return this.http.post<any>(`${this.apiServerUrl}/carts/deleteItemInCart/${CId}/${Id}`,{CId,Id});
  }
}
