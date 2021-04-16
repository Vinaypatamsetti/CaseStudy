package vinay.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Users")
public class userProfile {
	

	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	@Id
	private int id;
	private String fullName;
	private String image;
	private String email;
	private  Long  mobileNo;
	private  LocalDate dob;
	private  String gender;
	private  String role;
	private String password;
	
	
	
	public userProfile(int id, String fullName, String image, String email, Long mobileNo, LocalDate dob, String gender,
			String role, String password) {
		
		this.id = id;
		this.fullName = fullName;
		this.image = image;
		this.email = email;
		this.mobileNo = mobileNo;
		this.dob = dob;
		this.gender = gender;
		this.role = role;
		this.password = password;
	
	}
	public userProfile() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(Long mobileNo) {
		this.mobileNo = mobileNo;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "userProfile [id=" + id + ", fullName=" + fullName + ", image=" + image + ", email=" + email
				+ ", mobileNo=" + mobileNo + ", dob=" + dob + ", gender=" + gender + ", role=" + role + ", password="
				+ password +  "]";
	}
	
	
	
	
	

}
