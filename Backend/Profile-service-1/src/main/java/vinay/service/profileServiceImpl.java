package vinay.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import vinay.exception.InputException;
import vinay.exception.ResourceNotFoundException;
import vinay.model.Role;
import vinay.model.userProfile;
import vinay.repository.userProfileRepository;

@Service
public class profileServiceImpl implements profileService,Role{
	@Autowired
	private userProfileRepository upr;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder; 

	@Override
	public userProfile addNewCustomer(userProfile user) {
		//If email already exists user gets an input exception  
		if(upr.findByEmail(user.getEmail())!=null) {
			throw new InputException("Email already taken");
		}
		//set role as customer
		user.setRole(Customer);
		//password is encrypted using BCryptPasswordEncoder to store password
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return upr.save(user);
	}

	@Override
	public void addNewMerchant(userProfile user) {
		if(upr.findByEmail(user.getEmail())!=null) {
			throw new InputException("Email already taken");
		}
		
		//password is encrypted using BCryptPasswordEncoder to store password
		user.setPassword(passwordEncoder.encode(user.getPassword()));
       user.setRole(Merchant);
       upr.save(user);
	}

	@Override
	public void addNewDelivaryAgent(userProfile user) {
		if(upr.findByEmail(user.getEmail())!=null) {
			throw new InputException("Email already taken");
		}
		//password is encrypted using BCryptPasswordEncoder to store password
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setRole(DeliveryAgent);
		upr.save(user);
	}

	@Override
	public List<userProfile> getAllProfiles() {
		//when no user is registered, Resource not found exception in raised 
	   if(upr.findAll().size()==0) {
		   throw new ResourceNotFoundException("No users are registered");
	   }
	  
	   //retrieve all profiles in the repository
		return upr.findAll();
	}

	@Override
	public Optional<userProfile> getProfileById(int id) {
		
		return Optional.ofNullable(upr.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + id))); 
	}

	@Override
	public userProfile getProfileByMobile(long mobile) {
		if(upr.findAllByMobileNo(mobile)==null) {
			throw new ResourceNotFoundException("User not found  with mobile:"+mobile);
		}
		
		//retrieving all profiles registered with particular mobile number
		return upr.findAllByMobileNo(mobile);
	}

	@Override
	public userProfile updateProfile(userProfile user) {
		if(upr.findByEmail(user.getEmail())==null) {
			throw new ResourceNotFoundException("User not found  with id:"+user.getId());	
			}
	      
		return upr.save(user);
	}

	@Override
	public void deleteProfile(int id) {
		
	 Optional.ofNullable(upr.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + id)));
	   
	  //finding a particular profile with id and deeting it 
	 upr.deleteById(id);
	}


	
	
	

}
