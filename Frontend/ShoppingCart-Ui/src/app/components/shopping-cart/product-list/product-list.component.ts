import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav.component';
import { LoginService } from 'src/app/services/login.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   
public products:Product[] |undefined;
 
 public Cid=0;
 
  constructor(private productService:ProductService,private router:Router,private loginService:LoginService,private cartService:CartService){}
 
  ngOnInit():void {
    this.Products();
   this.isLoggedIn();
  }
  
  public Products() :void{
     this.productService.getAllProducts().subscribe(
       (response:Product[])=>{
         this.products= response;
        
       },
       (error: HttpErrorResponse) => {
        alert(error.message);
      }
     );
  }
 
  getItemDetails(name:string){
    this.router.navigate((['product',name]))
  }
  
  isLoggedIn(){
    if(this.loginService.isLoggedIn()){
      this.getUserDetails();
    }
  }
   
   public getUserDetails():void{ 
     this.loginService.getUser().subscribe(
       (response:any)=>{
         this.Cid=response.id;
       },(error: HttpErrorResponse)=> {
        alert(error.message);
      }
     );
  }
  
 public AddProductToCart(Pid:number):void{
   console.log("came to add product in comp");
   if(this.loginService.isLoggedIn()){
    this.cartService.addProductToCart(this.Cid,Pid).subscribe(
      (response:any)=>{

      },(error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
 }
 }
}