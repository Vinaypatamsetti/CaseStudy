import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public id:number;
  public editproduct:Product;
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.getProduct();
  }
   
   public getProduct():void{
     this.productService.getProductById(this.id).subscribe(
       (response:Product)=>{
        this.editproduct=response;
        console.log("product---");
        console.log(response);
       }
     );
   }


  public update(product:Product):void{
    this.productService.updateProduct(product).subscribe(
      (response:Product)=>{
        console.log(response);
        window.location.href="#"
      }, (error: HttpErrorResponse) => {
               alert(error.message);
      }

    );

  }


}
