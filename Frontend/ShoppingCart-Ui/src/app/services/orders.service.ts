import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllOrders(id:number):Observable<Order>{
    return this.http.get<Order>(`${this.apiServerUrl}/orders/getOrderByCustomerId/${id}`);
  }
    

  public placeOrder(id:number,address:Address):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/orders/placeOrder/${id}`,address);
  }
  
  public deliveries():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/orders/viewAllOrders`);
  }


  public changeStatus(id:number,text:string):Observable<any>{
    console.log("cus id :"+id+text);
    return this.http.put<any>(`${this.apiServerUrl}/orders/changeOrderStatus/${id}`,text);
  }
 
}
