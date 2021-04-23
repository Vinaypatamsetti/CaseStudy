import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {

  active = 1;

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
 

  public postProduct(addForm:NgForm):void{
    this.productService.addProduct(addForm.value).subscribe(
      (response:any)=>{
        console.log(response);
        addForm.reset();
        window.location.href="/shop";
      }
    );
  }
}
