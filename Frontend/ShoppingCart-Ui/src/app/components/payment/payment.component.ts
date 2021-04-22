import { Component, OnInit } from '@angular/core';
import { RazorService } from 'src/app/services/razor.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public rzp1: any;

  option = {
    "key": 'rzp_test_COTSbQCfBaD4My', 
    "amount": "100", 
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://images.unsplash.com/photo-1557821552-17105176677c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    // "order_id": " ", 
    //"callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "handler":  (response)=>{
      alert("Your payment is successful");
      
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



  constructor(private payment:RazorService) { }

  ngOnInit() {
  }
    

  

 public  pay():void {
   this.rzp1 = new  this.payment.nativeWindow.Razorpay(this.option);
   this.rzp1.open();
   this.rzp1.on('payment.failed',(response)=>{
    alert("Your Payment failed");
   
  });
  }

}
