package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.VendaDTO;
import br.com.uniamerica.pizzaria.entity.Venda;
import br.com.uniamerica.pizzaria.repository.VendaRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class VendaServiceTest {
    @Mock
    private VendaRepository vendaRepository;

    @InjectMocks
    private VendaService vendaService;

    @Test
    void testFindById() {
        Venda venda = new Venda(); // Simulação de uma venda retornada pelo repositório
        when(vendaRepository.findById(1L)).thenReturn(Optional.of(venda));

        Optional<VendaDTO> vendaDTO = vendaService.findById(1L);

        assertTrue(vendaDTO.isPresent());
        // Adicione testes para validar a conversão de Venda para VendaDTO
    }

    @Test
    void testFindAll() {
        List<Venda> vendas = Collections.singletonList(new Venda()); // Simulação de lista de vendas retornada pelo repositório
        when(vendaRepository.findAll()).thenReturn(vendas);

        List<VendaDTO> vendasDTO = vendaService.findAll();

        assertFalse(vendasDTO.isEmpty());
        // Adicione testes para validar a conversão de List<Venda> para List<VendaDTO>
    }

    @Test
    void testFindByAtivo() {
        List<Venda> vendas = Collections.singletonList(new Venda()); // Simulação de lista de vendas retornada pelo repositório
        when(vendaRepository.findByAtivo(true)).thenReturn(vendas);

        List<VendaDTO> vendasDTO = vendaService.findByAtivo(true);

        assertFalse(vendasDTO.isEmpty());
        // Adicione testes para validar a conversão de List<Venda> para List<VendaDTO>
    }
}
