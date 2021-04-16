package vinay.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vinay.model.Cart;
import vinay.model.Products;
import vinay.service.CartService;

@RestController
@RequestMapping("/carts")
public class CartController {
	
	@Autowired
	private CartService cs;
	
	
	@GetMapping("/ViewAllProducts")
	public ResponseEntity<Products> getAllProducts(){
		
		return cs.getAllProducts();
	}

	
	@GetMapping("/getCartBy/{id}")
		public Cart getCartById(@PathVariable("id") int id) {
		 return cs.getCartById(id);
	}
	
	@GetMapping("/getAllCarts")
	public ResponseEntity<List<Cart>> getAllCarts(){
		return  new ResponseEntity<List<Cart>>(cs.getAllCarts(),HttpStatus.OK);
	}
	
	@PostMapping("/addCartWith/{Id}")
	public void addCart(@PathVariable("Id") int id) {
		if(cs.getCartById(id)==null) {
		cs.addCart(id);
		}
	}
	
	
	@PostMapping("/deleteItemInCart/{CId}/{Id}")
	public void updateCartWithId(@PathVariable("CId") int cid,@PathVariable("Id") int id) {
	     cs.updateCart(cid,id);
		
	}
	 
	@PostMapping("/addProductToCart/{CId}/{PId}")
	public void addToCart(@PathVariable("CId") int Cid,@PathVariable("PId") int Pid) {
		cs.addToCart(Cid,Pid);
	}
}
