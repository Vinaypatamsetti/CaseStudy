import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/models/userProfile';
import { RazorService } from 'src/app/services/razor.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

   public id:number;
   public userdetail:any;
  constructor(private route:ActivatedRoute,private user:UsersService){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.profile();
  }
  

  public profile():void{
      
    this.user.getProfile(this.id).subscribe(
      (response:UserProfile)=>{
       this.userdetail=response;
       
      }
    );
  }
}