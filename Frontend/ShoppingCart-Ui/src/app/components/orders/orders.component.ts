import { HttpErrorResponse } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { OrdersService } from 'src/app/services/orders.service';
import { RazorService } from 'src/app/services/razor.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  public rzp1: any;
  public cusId:number;
  public add:Address;
  cost: number;
 // public cost:number;
  constructor(private UsersService:UsersService,
    private loginService:LoginService,
    private ordersService:OrdersService,
    private router:Router,
    private payment:RazorService,
    private cart:CartService,
    private zone: NgZone) { }

  ngOnInit() {
    this.getUserDetails();
  }
   
  public getUserDetails(){
      this.loginService.getUser().subscribe(
        (response:any)=>{
          this.cusId=response.id;
          this.getCart(this.cusId);
        }
      );
  }
   
  public getCart(id:number){
    this.cart.getCartWithId(id).subscribe(
      (response:Cart)=>{
       this.cost=response.totalPrice;
        console.log("cart cost"+this.cost);
      }
    )
  }
   

  public Address(address:Address,addressForm:NgForm):void{
    address.customerId=this.cusId;
   
    this.add=address;
     this.UsersService.addAddress(address).subscribe(
       (response:any)=>{
        addressForm.reset();  
       this.order(this.cusId,this.add);
       }
     );
   }

  public addAddress(address:Address,addressForm:NgForm):void{
   address.customerId=this.cusId;
  
   this.add=address;
    this.UsersService.addAddress(address).subscribe(
      (response:any)=>{
         
       this.pay();
       addressForm.reset();
       
     //  this.order(this.cusId,this.add);

      }
    );
  }

  public  order(id:number,address:Address):void{
    this.ordersService.placeOrder(id,address).subscribe(
      (response:any)=>{
       // this.router.navigate(['orders',this.cusId]);
        //private zone: NgZone

this.zone.run(() => {
  this.router.navigate(['orders',this.cusId]);
                });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  

  option = {
    "key": 'rzp_test_COTSbQCfBaD4My', 
    amount: 10000,
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://images.unsplash.com/photo-1557821552-17105176677c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    // "order_id": " ", 
    //"callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "handler":  (response)=>{
      alert("Your payment is successful");
      this.order(this.cusId,this.add);
  },
    "prefill": {
        "name": "Patamsetti Vinay",
        "email": "vinaypatamsetti@gmail.com",
        "contact": "8074449452"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};  


 public  pay():void {
   this.option.amount= this.cost*100;
   this.rzp1 = new  this.payment.nativeWindow.Razorpay(this.option);
   this.rzp1.open();
   this.rzp1.on('payment.failed',(response)=>{
    alert("Your Payment failed");
    
   
this.zone.run(() => {
  this.router.navigate(['shop']);
                });
  });
  }
  


}
