import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/userProfile';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  public users : UserProfile[] | undefined;

  constructor(private  usersService:UsersService,private router: Router){}
  
  ngOnInit(){
    
  }
 

  public addNewMerchant(addForm: NgForm): void{
    // document.getElementById('add-employee-form').click();
    this.usersService.addNewMerchant(addForm.value).subscribe(
      (response: UserProfile) => {
        console.log(response);
        
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
