package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.UserDTO;
import br.com.uniamerica.pizzaria.entity.User;
import br.com.uniamerica.pizzaria.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void testGetAllUsers() {
        List<User> users = Collections.singletonList(new User()); // Crie uma lista fictícia de usuários
        when(userRepository.findAll()).thenReturn(users);

        List<UserDTO> usersDTO = userService.getAllUsers();

        assertFalse(usersDTO.isEmpty());
        // Adicione aqui testes para garantir a conversão correta para lista de UserDTO
    }

    @Test
    void testCreateUser() {
        User user = new User();
        UserDTO userDTO = new UserDTO(user); // Crie um UserDTO fictício para os testes
        User savedUser = new User(); // Crie um usuário fictício para retornar do repository
        when(userRepository.save(any())).thenReturn(savedUser);

        UserDTO createdUserDTO = userService.createUser(userDTO);

        assertNotNull(createdUserDTO);
        // Adicione aqui testes para garantir a criação correta do usuário e a conversão para UserDTO
    }
    @Test
    void testLoadUserByUsername_UserFound() {
        // Simulação de um usuário existente
        User user = new User();
        user.setUsername("test_user");
        user.setPassword("password"); // Defina a senha do usuário

        // Simulando o comportamento do UserRepository
        when(userRepository.findByUsername("test_user")).thenReturn(user);

        // Chamando o método do serviço
        UserDetails userDetails = userService.loadUserByUsername("test_user");

        assertNotNull(userDetails);
        assertEquals(user.getUsername(), userDetails.getUsername());
        // Adicione outras verificações conforme necessário
    }

    @Test
    void testLoadUserByUsername_EmptyPassword() {
        // Simulação de um usuário com senha vazia
        User user = new User();
        user.setUsername("user_with_empty_password");
        user.setPassword(""); // Defina a senha vazia do usuário

        // Simulando o comportamento do UserRepository
        when(userRepository.findByUsername("user_with_empty_password")).thenReturn(user);

        // Chamando o método do serviço para um usuário com senha vazia
        assertThrows(UsernameNotFoundException.class, () -> {
            userService.loadUserByUsername("user_with_empty_password");
        });
    }
}
