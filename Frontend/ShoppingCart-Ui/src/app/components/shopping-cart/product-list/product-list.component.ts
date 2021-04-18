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
 public role:string;
 public merchant=false;
 public customer=false;
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
         this.role=response.role;
         this.assignRole();
       },(error: HttpErrorResponse)=> {
        alert(error.message);
      }
     );
  }

   assignRole(){
     if(this.role==="customer"){
       return this.customer=true;
     }else if(this.role==="merchant"){
      return this.merchant=true;
     }
   }
  
 public AddProductToCart(Pid:number):void{
   
   if(this.loginService.isLoggedIn()){
    this.cartService.addProductToCart(this.Cid,Pid).subscribe(
      (response:any)=>{

      },(error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
 }
 }

 public RemoveProduct(Pid:number):void{
   this.productService.deleteProductById(Pid).subscribe(
    (response:void)=>{
      window.location.reload();
    },(error: HttpErrorResponse)=> {
      alert(error.message);
    }
   );
 }


  public searchProducts(key: string): void {
   
    const results: Product[]  = [];
    for (const product of this.products) {
      if (product.productName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.productType.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.category.toLowerCase().indexOf(key.toLowerCase()) !== -1
     ) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.Products();
    }
  }

}