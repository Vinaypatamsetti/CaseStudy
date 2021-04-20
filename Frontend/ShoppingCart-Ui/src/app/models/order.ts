
export interface Order{
    orderId:number;
    orderDate:Date;
    customerId:number;
    amount:number;
    modeOfPayment:any;
    orderStatus:string;
    quantity:number;
    address:Address;
    product:Array<Product>;
}

export interface Address{
    customerId:number;
	 fullName:string;
	 mobileNumber:number;
     flatDetails:string;
	 city:string;
	 pincode:number;
     state:string;
	
}

export interface Product{
     productId:number;
 productName:string;
	  price:number;
     quantity:number;
}