import { Product } from './product';

export interface Cart{
  cartId:number;
  totalPrice:number;
  items:Array<Items>;
   
 }
 
 export class Items{
   productName :string;
   productId:number;
   price :number;
   quantity :number;
   image:string;
  
   constructor(product:Product,quantity=1){
     this.productName=product.productName;
     this.price=product.price;
     this.quantity=quantity;
   }
 }