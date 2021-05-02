import { Component, OnInit } from '@angular/core';


import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {


   
   public id:number;
   public cid:number;
   public cart:Cart;
  public cartitems:any;
  public totalPrice=0;
  constructor(private cartService:CartService,private route:ActivatedRoute,private user:LoginService){

  }
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.showCartById(this.id);
  }
  
  
  public showCartById(id:number):void{

    this.cartService.getCartWithId(id).subscribe(
      (response:Cart)=>{
        this.cartitems=response.items;
        this.totalPrice=response.totalPrice;
        console.log("showing cart of id 2");
       
      }
    );
  }


  public deleteItem(index:number):void{
     console.log("delte");
     
    this.cartService.deleteItemInCart(this.id,index).subscribe(
      (response:any)=>{
        window.location.reload();
      }
    );
  }
  
  public deleteEntireCart():void{
    this.cartService.deleteCart(this.id).subscribe(
      (response: void) => {
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
