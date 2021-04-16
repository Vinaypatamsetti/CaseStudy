package vinay.repository; 

import org.springframework.data.mongodb.repository.MongoRepository;

import vinay.model.Cart;

public interface CartRepository extends MongoRepository<Cart,Integer> {

	public Cart findByCartId(int cartId);
   // public void addToCartWith(int cartId,int productId);

	

}
