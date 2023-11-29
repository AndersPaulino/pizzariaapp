package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.UserDTO;
import br.com.uniamerica.pizzaria.entity.User;
import br.com.uniamerica.pizzaria.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
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
}
