package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.PizzaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.PizzaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.PizzaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Pizza;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.entity.Tamanho;
import br.com.uniamerica.pizzaria.repository.PizzaRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PizzaServiceTest {
    @Mock
    private PizzaRepository pizzaRepository;

    @InjectMocks
    private PizzaService pizzaService;

    @Test
    void testFindById() {
        Long id = 1L;
        Pizza pizza = new Pizza(); // Crie uma pizza fictícia para os testes
        when(pizzaRepository.findById(id)).thenReturn(java.util.Optional.of(pizza));

        PizzaDTO pizzaDTO = pizzaService.findById(id);

        assertNotNull(pizzaDTO);
        // Adicione aqui testes para garantir a conversão correta para PizzaDTO
    }
    @Test
    void testFindById_ReturnsNull() {
        Long id = 1L;

        // Simulando o comportamento do repositório ao retornar null
        when(pizzaRepository.findById(id)).thenReturn(Optional.empty());

        // Chamando o método do serviço
        PizzaDTO result = pizzaService.findById(id);

        // Verificando se o resultado é null
        assertNull(result);
    }


    @Test
    void testFindAll() {
        List<Pizza> pizzas = Collections.singletonList(new Pizza()); // Crie uma lista fictícia de pizzas
        when(pizzaRepository.findAll()).thenReturn(pizzas);

        List<PizzaDTO> pizzasDTO = pizzaService.findAll();

        assertFalse(pizzasDTO.isEmpty());
        // Adicione aqui testes para garantir a conversão correta para lista de PizzaDTO
    }

    @Test
    void testFindByAtivo() {
        boolean ativo = true;
        when(pizzaRepository.findByAivo(ativo)).thenReturn(Collections.singletonList(new Pizza()));

        List<PizzaDTO> pizzasDTO = pizzaService.findByAtivo(ativo);

        assertFalse(pizzasDTO.isEmpty());
        // Adicione aqui testes para garantir a conversão correta para lista de PizzaDTO
    }

    @Test
    void testFindByDiaRegistro() {
        LocalDate registro = LocalDate.now();
        when(pizzaRepository.findByDiaRegistro(registro)).thenReturn(Collections.singletonList(new Pizza()));

        List<PizzaCadastroDTO> pizzasCadastroDTO = pizzaService.findByDiaRegistro(registro);

        assertFalse(pizzasCadastroDTO.isEmpty());
        // Adicione aqui testes para garantir a conversão correta para lista de PizzaCadastroDTO
    }

    @Test
    void testFindByDiaAtualizar() {
        LocalDate atualizar = LocalDate.now();
        when(pizzaRepository.findByDiaAtualizar(atualizar)).thenReturn(Collections.singletonList(new Pizza()));

        List<PizzaAtualizarDTO> pizzasAtualizarDTO = pizzaService.findByDiaAtualizar(atualizar);

        assertFalse(pizzasAtualizarDTO.isEmpty());
        // Adicione aqui testes para garantir a conversão correta para lista de PizzaAtualizarDTO
    }
    @Test
    void testCadastrarPizza_ValidPizza() {
        pizzaRepository = mock(PizzaRepository.class);
        pizzaService = new PizzaService(pizzaRepository);

        Pizza pizza = new Pizza();
        pizza.setTamanho(Tamanho.MEDIA);
        pizza.setSabor(Collections.singletonList(new Sabor()));
        pizza.setValorPizza(new BigDecimal("30"));

        assertDoesNotThrow(() -> pizzaService.cadastrarPizza(pizza));

        verify(pizzaRepository, times(1)).save(pizza);
    }

    @Test
    void testCadastrarPizza_InvalidPizza() {
        pizzaRepository = mock(PizzaRepository.class);
        pizzaService = new PizzaService(pizzaRepository);

        Pizza pizza = new Pizza();

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            pizzaService.cadastrarPizza(pizza);
        });

        assertEquals("O tamanho da pizza deve ser fornecido.", exception.getMessage());

        verify(pizzaRepository, never()).save(pizza);
    }

    @Test
    void testAtualizarPizza_ValidPizza() {
        pizzaRepository = mock(PizzaRepository.class);
        pizzaService = new PizzaService(pizzaRepository);

        Pizza pizzaAtual = new Pizza();
        pizzaAtual.setTamanho(Tamanho.PEQUENA);
        pizzaAtual.setSabor(Collections.singletonList(new Sabor()));
        pizzaAtual.setValorPizza(new BigDecimal("20"));

        Pizza pizzaExistente = new Pizza();

        when(pizzaRepository.findById(1L)).thenReturn(java.util.Optional.of(pizzaExistente));
        when(pizzaRepository.save(pizzaExistente)).thenReturn(pizzaExistente);

        Pizza updatedPizza = assertDoesNotThrow(() -> pizzaService.atualizarPizza(1L, pizzaAtual));

        assertEquals(pizzaAtual.getTamanho(), updatedPizza.getTamanho());
        assertEquals(pizzaAtual.getSabor(), updatedPizza.getSabor());
        assertEquals(pizzaAtual.getValorPizza(), updatedPizza.getValorPizza());

        verify(pizzaRepository, times(1)).findById(1L);
        verify(pizzaRepository, times(1)).save(pizzaExistente);
    }

}
