package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class UserDTOTest {
    private User user;
    private UserDTO userDTO;

    @Test
    void testConstructorWithUser(){
        user = new User();
        user.setUsername("Anderson");
        userDTO = new UserDTO(user);

        assertEquals(user.getId(), userDTO.getId());
        assertEquals(user.getUsername(), userDTO.getUsername());
        assertEquals(user.getRole(), userDTO.getRole());
        assertEquals(user.getPassword(), userDTO.getPassword());
    }

    @Test
    void testCOnstructorWithIndividualsParameters(){
        userDTO = new UserDTO(1L, "Anderson", "ABCD", "adm");

        assertEquals(1L, userDTO.getId());
        assertEquals("Anderson", userDTO.getUsername());
        assertEquals("ABCD", userDTO.getPassword());
        assertEquals("adm", userDTO.getRole());
    }
}
