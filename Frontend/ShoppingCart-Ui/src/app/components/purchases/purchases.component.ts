import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/models/cart';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  
  public id:number;
  public orders:any;
  public products:any;
  constructor(private orderService:OrdersService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.getOrders();
  }
  

  public getOrders():void{
    this.orderService.getAllOrders(this.id).subscribe(
      (response:Order)=>{
        console.log(response);
       this.orders=response;
       this.products=response.product;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}

//