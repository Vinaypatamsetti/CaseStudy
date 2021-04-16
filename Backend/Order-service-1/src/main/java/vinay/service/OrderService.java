package vinay.service;

import java.util.List;
import java.util.Optional;

import vinay.model.Address;
import vinay.model.Cart;
import vinay.model.Orders;
public interface OrderService {

	List<Orders> getAllOrders();

	List<Address> getAllAddress();

	List<Orders> getOrderByCustomerId(int id);

	List<Address> getAddByCustomerId(int id);

	Orders findMaxByOrderId();

	void placeOrder(Cart cart);

	Optional<Orders> getOrderByOrderId(int id);

	void storeAddress(Address address);

	void changeOrderStatus(String status, int id);

	String deleteOrder(int id);

}