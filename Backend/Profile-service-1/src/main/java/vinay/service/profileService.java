package vinay.service;

import java.util.List;
import java.util.Optional;

import vinay.model.userProfile;

public interface profileService {

	 userProfile addNewCustomer(userProfile user);

	void addNewMerchant(userProfile user);

	void addNewDelivaryAgent(userProfile user);

	List<userProfile> getAllProfiles();

	Optional<userProfile> getProfileById(int id);

	userProfile getProfileByMobile(long mobile);

	userProfile updateProfile(userProfile user);

	void deleteProfile(int id);

	

	
	
	
	

}
