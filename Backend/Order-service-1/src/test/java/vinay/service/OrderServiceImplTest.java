package vinay.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import vinay.model.Address;
import vinay.model.Orders;
import vinay.repository.AddressRepository;
import vinay.repository.OrderRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
class OrderServiceImplTest {
	
	@Autowired
	private OrderService orderService;
	
	
	@MockBean
	private OrderRepository orderRepository;
	
	@MockBean
	private AddressRepository addressRepository;

	@Test
	void testGetAllOrders() {
		when(orderRepository.findAll())
		.thenReturn(Stream.of(new Orders("1", null, 0, 0, null, null, 0, null, null),new Orders("2", null, 0, 0, null, null, 0, null, null)).collect(Collectors.toList()));
		assertEquals(2,orderService.getAllOrders().size());
	}

	@Test
	void testGetAllAddress() {
		when(addressRepository.findAll())
		.thenReturn(Stream.of(new Address(1, null, null, null, null, 0, null),new Address(2, null, null, null, null, 0, null)).collect(Collectors.toList()));
		assertEquals(2,orderService.getAllAddress().size());
	}

	@Test
	void testGetOrderByCustomerId() {
		int id=1;
		orderRepository.findByCustomerId(id);
		verify(orderRepository,times(1)).findByCustomerId(id);
	}

	@Test
	void testGetAddByCustomerId() {
		int id=1;
		addressRepository.findById(id);
		verify(addressRepository,times(1)).findById(id);
	}

	
	@Test
	void testGetOrderByOrderId() {
		String id="order1";
		orderRepository.findById(id);
		verify(orderRepository,times(1)).findById(id);
	}

	@Test
	void testStoreAddress() {
		Address address = new Address(1, null, null, null, null, 0, null);
		orderService.storeAddress(address);
		verify(addressRepository,times(1)).save(address);
	}

}
