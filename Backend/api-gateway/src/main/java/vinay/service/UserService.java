package vinay.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vinay.model.AuthRequest;
import vinay.model.AuthResponse;
import vinay.model.userProfile;
import vinay.repository.userProfileRepository;
import vinay.util.JwtUtil;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class UserService {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private userProfileRepository userRepository;


    //Generates token
    public ResponseEntity<?> generateToken(AuthRequest authRequest) throws Exception {
        try {
            //Verifying email and password
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
            );
        } catch (Exception e) {
            throw new Exception("Invalid email or password");
        }

        //Generate token
        String token = jwtUtil.generateToken(authRequest.getEmail());
        userProfile user = userRepository.findByEmail(authRequest.getEmail());

        //Response
        return ResponseEntity.status(HttpStatus.OK)
                .body(new AuthResponse(token, user));
    }

  

}
