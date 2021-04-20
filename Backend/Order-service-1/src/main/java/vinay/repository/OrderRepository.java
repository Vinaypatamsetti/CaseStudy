package vinay.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import vinay.model.Orders;

public interface OrderRepository extends MongoRepository<Orders,String>{
	
	public List<Orders> findByCustomerId(int customerId);
	
	public Orders findFirstByOrderByOrderIdDesc();

}