import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/userProfile';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delivary-agent',
  templateUrl: './delivary-agent.component.html',
  styleUrls: ['./delivary-agent.component.css']
})
export class DelivaryAgentComponent implements OnInit {
  public users : UserProfile[] | undefined;

  constructor(private  usersService:UsersService,private router: Router){}
  
  ngOnInit(){
    // this.getAllProfiles();
  }
 

  public addNewDeliveryAgent(addForm: NgForm): void{
    // document.getElementById('add-employee-form').click();
    this.usersService.addNewDeliveryAgent(addForm.value).subscribe(
      (response: UserProfile) => {
        console.log(response);
        
        addForm.reset();
        this.router.navigate(['login'])
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
