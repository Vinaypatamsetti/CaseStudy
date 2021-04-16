package vinay.resources;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import vinay.model.userProfile;
import vinay.service.SequenceGeneratorService;
import vinay.service.profileService;

@RestController
@RequestMapping("/users")
public class userProfileController {

	@Autowired
	private profileService ps;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;


	@PostMapping("/add/Customer")
	public userProfile addNewCustomer( @Valid @RequestBody userProfile user) {
		user.setId(sequenceGeneratorService.generateSequence(userProfile.SEQUENCE_NAME));
		
		return ps.addNewCustomer(user);
	}

	@PostMapping("/add/Merchant")
	public void addNewMerchant(@Valid @RequestBody userProfile user) {
		user.setId(sequenceGeneratorService.generateSequence(userProfile.SEQUENCE_NAME));
		ps.addNewMerchant(user);
	}

	@PostMapping("/add/DeliveryAgent")
	public void addNewDelivaryAgent(@Valid @RequestBody userProfile user) {
		user.setId(sequenceGeneratorService.generateSequence(userProfile.SEQUENCE_NAME));
		ps.addNewDelivaryAgent(user);
	}

	@GetMapping("/getAllProfiles")
	public List<userProfile> getAllProfiles(){
		return ps.getAllProfiles();

	}

	@GetMapping("/getProfileById/{id}")
	public Optional<userProfile> getProfileById(@PathVariable("id") int id){
		return ps.getProfileById(id);


	}

	@GetMapping("/getProfileByMobile/{mobile}")
	public userProfile getProfileByMobile(@PathVariable("mobile") long mobile) {
		return ps.getProfileByMobile(mobile); 
	}

	@PutMapping("/updateProfile")
	public userProfile updateProfile(@RequestBody userProfile user) {
		return ps.updateProfile(user);

	}

	@DeleteMapping("/deleteProfileById/{Id}")
	public void deleteProfile(@PathVariable("Id") int id) {
		
		
		ps.deleteProfile(id); 
	}

}