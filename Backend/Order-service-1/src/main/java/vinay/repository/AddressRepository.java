package vinay.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import vinay.model.Address;
public interface AddressRepository extends MongoRepository<Address, Integer>{
	
	public List<Address> findByCustomerId(int customerId);

}