import { Component, OnInit } from '@angular/core';


import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { HttpErrorResponse } from '@angular/common/http';
// import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {

  // cartItems = [];

  // cartTotal = 0

  // constructor(
  //   private msg: MessengerService,
  //   private cartService: CartService
  // ) { }

  // ngOnInit() {
  //   this.handleSubscription();
  //   this.loadCartItems();
  // }

  // handleSubscription() {
  //   this.msg.getMsg().subscribe((product: Product) => {
  //     this.loadCartItems();
  //   })
  // }

  // // loadCartItems() {
  // //   this.cartService.getCartItems().subscribe((items: CartItem[]) => {
  // //     this.cartItems = items;
  // //     this.calcCartTotal();
  // //   })
  // // }

  // calcCartTotal() {
  //   this.cartTotal = 0
  //   this.cartItems.forEach(item => {
  //     this.cartTotal += (item.qty * item.price)
  //   })
  // }
   
   public id:number;
   public cart:Cart;
  public cartitems:any;
  public totalPrice=0;
  constructor(private cartService:CartService,private route:ActivatedRoute){

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
        // console.log(response);
        // console.log(response.items[0].quantity);
        // console.log(response.items[0].productName);
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
