import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
 
  public  token: any | undefined;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
   
  }



public login(loginForm:NgForm): void{
  this.loginService.login(loginForm.value).subscribe(
    (response:any)=>{
      this.token=response;
      console.log(this.token.token);
    
   
      this.loginService.loginUser(this.token);
      loginForm.reset();
      window.location.href="/shop";
     },
          (error: HttpErrorResponse) =>{
           alert(error.message);
           loginForm.reset();
         }     
  );
}

}