package vinay.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;



import vinay.model.userProfile;
import vinay.repository.userProfileRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
class profileServiceImplTest {
	
	
	@Autowired
	private profileService service;
	 
	@MockBean
	private  userProfileRepository repo;
	

	@Test
	void testAddNewCustomer() {
		userProfile user= new userProfile(1, "Vinay", "abcd.jsp","vinay@gmail.com", null, null, null, null, "abc123");
	        when(repo.save(user)).thenReturn(user);
	        assertEquals(user, service.addNewCustomer(user));
	        
	}

	@Test
	void testAddNewMerchant() {
		userProfile user= new userProfile(1, "Vinay","abcd.jsp","vinay@gmail.com", null, null, null, null, "abc123");
        when(repo.save(user)).thenReturn(user);
        assertEquals(user, service.addNewCustomer(user));
	}

	@Test
	void testAddNewDelivaryAgent() {
		userProfile user= new userProfile(1, "Vinay","abcd.jsp","vinay@gmail.com", null, null, null, null, "abc123");
        when(repo.save(user)).thenReturn(user);
        assertEquals(user, service.addNewCustomer(user));
	}

	@Test
	void testGetAllProfiles() {
		when(repo.findAll()).thenReturn(Stream.of(new userProfile(1, "Vinay", "abcd.jsp", "vinay@gmail.com", null, null, null, null, "abcd123"),
				new userProfile(2, "teja", "ab.jsp", "teja@gmail.com", null, null, null, null, "ght123")).collect(Collectors.toList()));
		
		
		assertEquals(2,service.getAllProfiles().size());
	}

	@Test
	void testGetProfileById() {
		int id=1;
		repo.findById(id);
		verify(repo,times(1)).findById(id);		
	}

	@Test
	void testGetProfileByMobile() {
		userProfile user = new userProfile(1, "Vinay", "abcd.jsp", "vinay@gmail.com", null, null, null, null, "abcd123");
		long mobileNumber = 90000L;
		when(repo.findAllByMobileNo(mobileNumber)).thenReturn(user);
		assertEquals(user, service.getProfileByMobile(mobileNumber));
	}
	@Test
	void testUpdateProfile() {
		userProfile user = new userProfile(1, "Vinay", "abcd.jsp", "vinay@gmail.com", null, null, null, null, "abcd123");
		repo.save(user);
		verify(repo,times(1)).save(user);
	}

	@Test
	void testDeleteProfile() {
		
	}

}