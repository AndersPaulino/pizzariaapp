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


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;


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
