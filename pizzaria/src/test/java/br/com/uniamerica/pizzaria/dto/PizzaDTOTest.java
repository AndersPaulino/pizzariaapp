package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Pizza;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.entity.Tamanho;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static br.com.uniamerica.pizzaria.entity.Tamanho.GRANDE;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class PizzaDTOTest {
    private Pizza pizza;
    private PizzaDTO pizzaDTO;

    @Test
    void testConstructorWithPizza(){
        pizza = new Pizza();
        pizzaDTO = new PizzaDTO(pizza);

        assertEquals(pizza.getId(), pizzaDTO.getId());
        assertEquals(pizza.getValorPizza(), pizzaDTO.getValorPizza());
        assertEquals(pizza.getSabor(), pizzaDTO.getSabor());
        assertEquals(pizza.getQtdeSabor(), pizzaDTO.getQtdeSabor());
        assertEquals(pizza.isAtivo(), pizzaDTO.isAtivo());
        assertEquals(pizza.getRegistro(), pizzaDTO.getRegistro());
        assertEquals(pizza.getTamanho(), pizzaDTO.getTamanho());
    }

    @Test
    void testConstructorWithIndividualsParameters() {
        Long id = 1L;
        boolean ativo = true;
        LocalDateTime registro = LocalDateTime.now();
        List<Sabor> sabores;
        sabores = new ArrayList<>();
        Tamanho tamanho = GRANDE;
        BigDecimal valorPizza = BigDecimal.valueOf(25.0);
        int qtdeSabor = 2;

        pizzaDTO = new PizzaDTO(id, ativo, registro, sabores, tamanho, valorPizza, qtdeSabor);

        assertThat(pizzaDTO.getId()).isEqualTo(id);
        assertThat(pizzaDTO.isAtivo()).isEqualTo(ativo);
        assertThat(pizzaDTO.getRegistro()).isEqualTo(registro);
        assertThat(pizzaDTO.getSabor()).isEqualTo(sabores);
        assertThat(pizzaDTO.getTamanho()).isEqualTo(tamanho);
        assertThat(pizzaDTO.getValorPizza()).isEqualByComparingTo(valorPizza);
        assertThat(pizzaDTO.getQtdeSabor()).isEqualTo(qtdeSabor);
    }
}
