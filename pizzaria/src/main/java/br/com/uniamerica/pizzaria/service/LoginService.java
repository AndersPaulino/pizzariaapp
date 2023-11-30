package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.LoginDTO;
import br.com.uniamerica.pizzaria.dto.UserDTO;
import br.com.uniamerica.pizzaria.entity.User;
import br.com.uniamerica.pizzaria.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private UserRepository repository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;


    public UserDTO logar(LoginDTO loginDTO) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDTO.getUsername(),
                        loginDTO.getPassword()
                )
        );
        User user = repository.findByUsername(loginDTO.getUsername());
        var jwtToken = jwtService.generateToken(user);

        return toUserDTO(user, jwtToken);
    }


    private UserDTO toUserDTO(User user, String token) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setRole(user.getRole());
        userDTO.setToken(token);
        userDTO.setUsername(user.getUsername());
        return userDTO;
    }
}
