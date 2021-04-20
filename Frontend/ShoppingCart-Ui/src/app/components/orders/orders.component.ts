import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  public cusId:number;
  public add:Address;
  constructor(private UsersService:UsersService,private loginService:LoginService,private cartService:CartService,private router:Router) { }

  ngOnInit() {
    this.getUserDetails();
  }
   
  public getUserDetails(){
      this.loginService.getUser().subscribe(
        (response:any)=>{
          this.cusId=response.id;
        }
      );
  }
 

  public addAddress(address:Address,addressForm:NgForm):void{
   address.customerId=this.cusId;
   this.add=address;
    this.UsersService.addAddress(address).subscribe(
      (response:any)=>{
       addressForm.reset();
       this.order(this.cusId,this.add);

      }
    );
  }

  public  order(id:number,address:Address):void{
    this.cartService.placeOrder(id,address).subscribe(
      (response:any)=>{
        this.router.navigate(['orders',this.cusId])
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  


}
