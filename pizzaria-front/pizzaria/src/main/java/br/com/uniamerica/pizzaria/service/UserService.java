package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.UserCadDTO;
import br.com.uniamerica.pizzaria.dto.UserDTO;
import br.com.uniamerica.pizzaria.entity.User;
import br.com.uniamerica.pizzaria.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    public List<UserCadDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(UserCadDTO::new)
                .toList(); // Utilizando o método toList() em vez de Collectors.toList()
    }


    public UserCadDTO createUser(UserCadDTO userDTO) {
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setRole(userDTO.getRole());

        User savedUser = userRepository.save(user);
        return new UserCadDTO(savedUser);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        var user = userRepository.findByUsername(username);

        if(user.getPassword().isBlank() || user.getPassword().isEmpty()){
            throw new UsernameNotFoundException("User not found with username: " + username);
        }

        return user;
    }
}
