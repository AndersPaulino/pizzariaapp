package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.PizzaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.PizzaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.PizzaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Pizza;
import br.com.uniamerica.pizzaria.repository.PizzaRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

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
}
