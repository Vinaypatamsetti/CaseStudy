package vinay.repository;



import org.springframework.data.mongodb.repository.MongoRepository;

import vinay.model.userProfile;

public interface  userProfileRepository extends MongoRepository<userProfile,Integer> {

	public userProfile findAllByMobileNo(long mobileNo);
	public userProfile findByEmail(String email);
	public userProfile findByfullName(String name);
	
}
