import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  public deliveries():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/orders/viewAllOrders`);
  }
}
