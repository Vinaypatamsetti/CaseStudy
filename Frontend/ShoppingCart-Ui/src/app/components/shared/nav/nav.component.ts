import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   loggedIn=false;
   id:number;
   role:string;
   customer=false;
   merchant=false;
   deliveryAgent=false;
  constructor(private loginService:LoginService,private cartService:CartService) { }
  ngOnInit(){
    this.loggedIn = this.loginService.isLoggedIn();
    if(this.loggedIn==true){

      this.getUserDetails(); 
    }
    
  }
 
  
  public getUserDetails():void{
    console.log("came to get user details");
     this.loginService.getUser().subscribe(
       (response:any)=>{
         console.log(response);
         this.role= response.role;
         this.id=response.id;
         this.Customer();
         this.Merchant();
         this.DeliveryAgent();
         console.log(this.role)
         console.log(this.id);
         return this.id;
       }
     )
  }
  

 
  
  Customer(){
    if(this.role==="customer"){
      this.addCart(this.id);
      this.customer= true;
    }
    
  }
    
  Merchant(){
    if(this.role==="merchant"){
     this.merchant= true;
    }
   
  }
  
  DeliveryAgent(){
    if(this.role==="deliveryAgent"){
      this.deliveryAgent=true;
    }
    
  }
  

  logout()
  {
    this.loginService.logout();
    window.location.href="/shop";
  }
  
  public addCart(id:number):void{
   
   this.cartService.generateCart(this.id).subscribe(
     (response:CartService)=>{

     },
     (error:HttpErrorResponse)=>{
       alert(error.message);
     }
   );
  }


}
