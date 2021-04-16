import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {

   public name:string;
   public product:Product;
  constructor(private productService:ProductService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
    this.getItemDetails(this.name);
    
  }
  

  public getItemDetails(name:string):void{
      this.productService.getProduct(name).subscribe(
        (response:Product)=>{
          this.product= response;
         console.log(this.product.productName);
        },
        (error: HttpErrorResponse) => {
         alert(error.message);
       }
      );
   }

  }
   

