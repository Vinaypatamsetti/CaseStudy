package vinay.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vinay.model.userProfile;
import vinay.repository.userProfileRepository;
import vinay.util.MyUserDetails;

@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private userProfileRepository userprofilerepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        email = email.toLowerCase();
        userProfile user = userprofilerepo.findByEmail(email);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new MyUserDetails(user);
    }
}
