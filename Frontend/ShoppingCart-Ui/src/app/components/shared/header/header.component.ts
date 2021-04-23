import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/userProfile';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   

  public name:string;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.getUser();
  }

  public getUser():void{
    this.loginService.getUser().subscribe(
      (response:any)=>{
        console.log(response.name)
        this.name=response.fullName;
      }
    )
  }

}
