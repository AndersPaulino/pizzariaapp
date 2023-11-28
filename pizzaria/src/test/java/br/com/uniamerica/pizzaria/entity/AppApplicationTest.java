package br.com.uniamerica.pizzaria.entity;

import br.com.uniamerica.pizzaria.AppApplication;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@SpringBootTest
class AppApplicationTest {
    @Test
    void mainMethodShouldNotThrowException() {
        assertDoesNotThrow(() -> AppApplication.main(new String[]{}));
    }
}
