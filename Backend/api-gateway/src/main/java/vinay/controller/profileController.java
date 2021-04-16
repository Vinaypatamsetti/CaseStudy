package vinay.controller;
import javax.servlet.http.HttpServletRequest;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import vinay.model.userProfile;
import vinay.service.ProfileService;

@RestController
@RequestMapping("/token")
public class profileController {
	@Autowired
	private ProfileService profileService;

//	@Autowired
//	private CartService cartService;

	    @GetMapping("/test")
	    public String geti(HttpServletRequest request) {
	    	return (String) request.getAttribute("id");
	    }

	@GetMapping("/user")
	public ResponseEntity<?> getUser(HttpServletRequest request) {
		try {
			String id = (String) request.getAttribute("id");
			return profileService.getUser(Integer.valueOf(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(Map.of("message", e.getMessage()));
		}
	}



	@DeleteMapping("/user")
	public ResponseEntity<?> deleteUser(HttpServletRequest request) {
		try {
			String id = (String) request.getAttribute("id");
			return profileService.deleteUser(Integer.valueOf(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(Map.of("message", e.getMessage()));
		}
	}

	@PutMapping("/user")
	public ResponseEntity<?> updateUser(HttpServletRequest request, @RequestBody userProfile user) {
		try {
			String id = (String) request.getAttribute("id");
			return profileService.updateUser(Integer.valueOf(id), user);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(Map.of("message", e.getMessage()));
		}
	}
}