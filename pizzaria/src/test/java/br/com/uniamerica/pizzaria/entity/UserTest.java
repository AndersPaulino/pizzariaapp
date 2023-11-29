package br.com.uniamerica.pizzaria.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class UserTest {
    @Test
    void testGetAuthorities() {
        String role = "ROLE_USER"; // Defina o papel que será testado
        User userDetails = new User();
        userDetails.setRole(role);

        Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();

        assertEquals(1, authorities.size());
        assertTrue(authorities.contains(new SimpleGrantedAuthority(role)));
    }

    @Test
    void testIsAccountNonExpired() {
        User userDetails = new User();
        assertTrue(userDetails.isAccountNonExpired());
    }

    @Test
    void testIsAccountNonLocked() {
        User userDetails = new User();
        assertTrue(userDetails.isAccountNonLocked());
    }

    @Test
    void testIsCredentialsNonExpired() {
        User userDetails = new User();
        assertTrue(userDetails.isCredentialsNonExpired());
    }

    @Test
    void testIsEnabled() {
        User userDetails = new User();
        assertTrue(userDetails.isEnabled());
    }
}
