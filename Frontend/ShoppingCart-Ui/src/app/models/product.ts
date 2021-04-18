export  interface Product{
    productId:number;
	productType:string;
	productName: string;
	category:string;
     rating:Map<number,number>;
	 review:Map<number,string>;
     image1:string;
	 image2:string;
	 price:number;
	 description:string;
	 specification:Map<string,string>; 
}