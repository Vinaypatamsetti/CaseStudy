import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  public orders:any;
  public id:number;
  public text:string;
  constructor(private orderService:OrdersService,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.getOrders();
  }
  

   public change(id:number):void{
     this.text="Delivered";
     this.orderService.changeStatus(id,this.text).subscribe(
       (response:any)=>{
          
       }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
     );
   }

  public getOrders():void{
    this.orderService.deliveries().subscribe(
      (response:Order)=>{
        console.log(response);
       this.orders=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}


