package vinay.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import vinay.model.Cart;
import vinay.model.Items;
import vinay.model.Product;
import vinay.model.Products;
import vinay.repository.CartRepository;

@Service
public class CartServiceImpl implements CartService{
	
	@Autowired
	private CartRepository cr;
	
	@Autowired
	private RestTemplate restTemplate;
	
	
	
	
	@Override
	public ResponseEntity<Products> getAllProducts() {
		HttpHeaders header = new HttpHeaders();
		header.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<Products> entity = new HttpEntity<Products>(header);
		ResponseEntity<Products> result = restTemplate.getForEntity("http://localhost:8082/products/getAllProducts", Products.class);
		System.out.println(result);
		return result;
		
	}

	@Override
	public Cart getCartById(int id) {
		
		return cr.findByCartId(id);
	}
	

	@Override
	public void addCart(int id) {
		
		Cart cart=new Cart();
		List<Items> list= new ArrayList<>();
		
			cart.setCartId(id);
			cart.setItems(list);
		   cr.save(cart);
		
	}

	@Override
	public List<Cart> getAllCarts() {
	
		return cr.findAll();
	}

//	@Override
//	public void updateCartWithId(int id, Cart cart) {
//		if(cr.findByCartId(id).getCartId() == id) {
//			 cr.save(cart);
//		}
//		
//	}
	
	
	//deleting item in a cart
	@Override
	public void updateCart(int cid,int id) {
		if(cr.findByCartId(cid)==null)
		{
			//throw new InputErrorException("Cart Not Found with Id "+cid);
		}
		Cart cart = cr.findByCartId(cid);                 //getCartById(cid);
		cart.setTotalPrice(cart.getTotalPrice()-(cart.getItems().get(id).getPrice()*cart.getItems().get(id).getQuantity()));
		cart.getItems().remove(id);
		cr.save(cart);
	}

	@Override
	public void addToCart(int cId, int pId) {
		if(cr.findByCartId(cId)==null)
		{
		//	throw new ResourceNotFoundException("Cart Not Found with Id "+cId);
		}
		Cart cart = getCartById(cId);
		Items items = new Items();
		boolean exists = false;
		int i=0;
		ResponseEntity<Product> re = restTemplate.getForEntity("http://localhost:8082/products/getProductById/{Id}", Product.class,pId);
		if(re==null)
		{
			//throw new ResourceNotFoundException("Product Not Found with Id "+pId);
		}
		for(i=0;i<cart.getItems().size();i++)
		{
			if(cart.getItems().get(i).getProductId()==pId)
			{
				exists = true;
				break;
			}
		}
		
		if(!exists)
		{
			items.setProductName(re.getBody().getProductName());
			items.setProductId(re.getBody().getProductId());
			items.setImage(re.getBody().getImage1());
			items.setPrice(re.getBody().getPrice());
			items.setQuantity(1);
			cart.getItems().add(items);
			cart.setTotalPrice(cart.getTotalPrice()+items.getPrice());
			cr.save(cart);
			return;
		} 	
		cart.getItems().get(i).setQuantity(cart.getItems().get(i).getQuantity()+1);
		cart.setTotalPrice(cart.getTotalPrice()+cart.getItems().get(i).getPrice());
		cr.save(cart);

	}

	@Override
	public void deleteCartById(int cid) {
	
		cr.deleteById(cid);
	}
    
	
	
	
}