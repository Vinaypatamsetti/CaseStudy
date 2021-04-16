import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

    
  public login(login: Login): Observable<Login>{
    return this.http.post<Login>(`${this.apiServerUrl}/login/authenticate`,login);
  }

  public getUser():Observable<Token>{
    return this.http.get<Token>(`${this.apiServerUrl}/token/user`);
  }

  public loginUser(token: string){
    localStorage.setItem("token",token)
    return true;
  }

  public logout(){
    localStorage.removeItem("token");
    location.reload();
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  getToken()
  {
    return localStorage.getItem("token");
  }
}
