package vinay.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import vinay.model.Cart;
import vinay.model.Products;

public interface CartService {

	ResponseEntity<Products> getAllProducts();

	Cart getCartById(int id);

	void addCart(int id);

	List<Cart> getAllCarts();

	//void updateCartWithId(int id, Cart cart);

	void addToCart(int Cid, int Pid);

	void updateCart(int cid, int id);

	

	

}
