import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';
import { Token } from '../models/token';
import { UserProfile } from '../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllProfiles(): Observable<UserProfile[]>{
    return this.http.get<UserProfile[]>(`${this.apiServerUrl}/users/getAllProfiles`);
  }

  public addNewCustomer(userprofile: UserProfile): Observable<UserProfile>{
    return this.http.post<UserProfile>(`${this.apiServerUrl}/users/add/Customer`,userprofile);
  }
  public addNewMerchant(userprofile: UserProfile): Observable<UserProfile>{
      return this.http.post<UserProfile>(`${this.apiServerUrl}/users/add/Merchant`,userprofile);
  }
  public addNewDeliveryAgent(userprofile: UserProfile): Observable<UserProfile>{
        return this.http.post<UserProfile>(`${this.apiServerUrl}/users/add/DeliveryAgent`,userprofile);
  }

  public addAddress(address:Address):Observable<Address>{
    return this.http.post<Address>(`${this.apiServerUrl}/orders/storeAddress`,address);
  }
  
   public getProfile(id:number):Observable<any>{
     return this.http.get<any>(`${this.apiServerUrl}/users/getProfileById/${id}`);
   }

}
