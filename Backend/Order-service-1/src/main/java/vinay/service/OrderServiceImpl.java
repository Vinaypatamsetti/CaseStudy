package vinay.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import vinay.exception.ResourceNotFoundException;
import vinay.model.Address;
import vinay.model.Cart;
import vinay.model.Orders;
import vinay.model.Product;

import vinay.repository.AddressRepository;
import vinay.repository.OrderRepository;
@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	private OrderRepository orderRepository;


	@Autowired
	private AddressRepository addressRepository;
	
	@Autowired
	private RestTemplate restTemplate;

	@Override
	public List<Orders> getAllOrders() {
		if(orderRepository.findAll().size()==0) {
			throw new ResourceNotFoundException("No orders are placed");
		}
		return orderRepository.findAll();
	}

	@Override
	public List<Address> getAllAddress() {
		if(addressRepository.findAll().size()==0) {
			throw new ResourceNotFoundException("No Address are found");
		}
		
		return  addressRepository.findAll();
	}

	@Override
	public List<Orders> getOrderByCustomerId(int id) {
		if(orderRepository.findByCustomerId(id).size()==0) {
			throw new ResourceNotFoundException("No orders are placed by customer with id"+id);
		}
		return orderRepository.findByCustomerId(id);
	}

	@Override
	public  Address getAddByCustomerId(int id) {
		
		if(addressRepository.findByCustomerId(id)==null) {
			throw new ResourceNotFoundException("Address not found for customer with id"+id);
		}
		return addressRepository.findByCustomerId(id);
	}

	@Override
	public Orders findMaxByOrderId() {
		return orderRepository.findFirstByOrderByOrderIdDesc();
	}

	
	@Override
	public void placeOrder(int id, Address address) {
		//Address
		Orders order = new Orders();
		List<Product> products = new ArrayList<Product>();
		ResponseEntity<Cart> cart = restTemplate.getForEntity("http://localhost:8083/carts/getCartBy/{id}", Cart.class,id);
		order.setCustomerId(cart.getBody().getCartId());
	     order.setAmount(cart.getBody().getTotalPrice());
		order.setOrderStatus("Ordered");
		order.setQuantity(cart.getBody().getItems().size());
		order.setAddress(address);
		for(int i=0;i<cart.getBody().getItems().size();i++)
		{
			Product product = new Product();
			product.setProductId(cart.getBody().getItems().get(i).getProductId());
			product.setProductName(cart.getBody().getItems().get(i).getProductName());
			product.setQuantity(cart.getBody().getItems().get(i).getQuantity());
		product.setPrice(cart.getBody().getItems().get(i).getPrice());
			products.add(product);
		}
		order.setProduct(products);
		order.setOrderDate(java.time.LocalDate.now());
		orderRepository.save(order);
		restTemplate.delete("http://localhost:8083/carts/deleteCartById/{CId}",id);
	}


	@Override
	public void storeAddress(Address address) {
		addressRepository.save(address);
	}
//
//	@Override
//	public void changeOrderStatus(String status, int id) {
//		orderRepository.findById(id).get().setOrderStatus(status);
//	}
//
//	@Override
//	public String deleteOrder(int id) {
//		orderRepository.deleteById(id);
//		return "Order Deleted";
//	}

	@Override
	public Optional<Orders> getOrderByOrderId(String id) {
		if(orderRepository.findById(id).isEmpty()) {
			throw new ResourceNotFoundException("Order not found with orderId:"+id);
		}
		return orderRepository.findById(id);
	}

	@Override
	public void changeOrderStatus(String status, String id) {
		
//		if(orderRepository.findById(id).isEmpty()) {
//			throw new ResourceNotFoundException("Order not found with orderId:"+id+" to change the status");
//		}
	// Orders order=orderRepository.findById(id).get().setOrderStatus(status);
		Orders order=orderRepository.findByOrderId(id);
		 order.setOrderStatus(status);
		orderRepository.save(order);
	}

	@Override
	public String deleteOrder(String id) {
		
		if(orderRepository.findById(id).isEmpty()) {
			throw new ResourceNotFoundException("Order not found with orderId:"+id+" to delete");
		}
		
		orderRepository.deleteById(id);
		return "Order Deleted Successfully";
	}

}