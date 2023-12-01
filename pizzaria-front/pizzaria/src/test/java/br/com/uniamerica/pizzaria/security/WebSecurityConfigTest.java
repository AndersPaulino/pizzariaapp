package br.com.uniamerica.pizzaria.security;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;

@SpringBootTest
@AutoConfigureMockMvc
class WebSecurityConfigTest {
    @Autowired
    private AuthenticationManagerBuilder auth;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    void testSecurityConfiguration() throws Exception {
        assertNotNull(auth);
    }
}
