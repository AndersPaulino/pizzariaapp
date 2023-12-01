package br.com.uniamerica.pizzaria.dto.cadastro;

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

@ExtendWith(MockitoExtension.class)
class PizzaCadastroDTOTest {
    private Pizza pizza;

    private PizzaCadastroDTO pizzaDTO;

    @Test
    void testConstructorWithEntity() {
        // Criando uma pizza fictícia para utilizar nos testes
        Pizza pizza = new Pizza();
        pizza.setAtivo(true);
        pizza.setRegistro(LocalDateTime.now());
        pizza.setSabor(new ArrayList<>()); // Define sabores fictícios
        pizza.setTamanho(GRANDE);
        pizza.setValorPizza(BigDecimal.valueOf(20));
        pizza.setQtdeSabor(2);

        // Criando um objeto PizzaCadastroDTO utilizando o construtor com uma entidade Pizza
        pizzaDTO = new PizzaCadastroDTO(pizza);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(pizzaDTO.getId()).isEqualTo(pizza.getId());
        assertThat(pizzaDTO.isAtivo()).isEqualTo(pizza.isAtivo());
        assertThat(pizzaDTO.getRegistro()).isEqualTo(pizza.getRegistro());
        assertThat(pizzaDTO.getSabor()).isEqualTo(pizza.getSabor());
        assertThat(pizzaDTO.getTamanho()).isEqualTo(pizza.getTamanho());
        assertThat(pizzaDTO.getValorPizza()).isEqualTo(pizza.getValorPizza());
        assertThat(pizzaDTO.getQtdeSabor()).isEqualTo(pizza.getQtdeSabor());
    }

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 2L;
        boolean ativo = false;
        LocalDateTime registro = LocalDateTime.now();
        Tamanho tamanho = GRANDE;
        List<Sabor> sabores = new ArrayList<>(); // Defina sabores fictícios
        BigDecimal valorPizza = BigDecimal.valueOf(25);
        int qtdeSabor = 3;

        // Criando um objeto PizzaCadastroDTO utilizando o construtor com parâmetros
        pizzaDTO = new PizzaCadastroDTO(id, ativo, registro, sabores, tamanho, valorPizza, qtdeSabor);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(pizzaDTO.getId()).isEqualTo(id);
        assertThat(pizzaDTO.isAtivo()).isEqualTo(ativo);
        assertThat(pizzaDTO.getRegistro()).isEqualTo(registro);
        assertThat(pizzaDTO.getSabor()).isEqualTo(sabores);
        assertThat(pizzaDTO.getTamanho()).isEqualTo(GRANDE);
        assertThat(pizzaDTO.getValorPizza()).isEqualTo(valorPizza);
        assertThat(pizzaDTO.getQtdeSabor()).isEqualTo(qtdeSabor);
    }
}
