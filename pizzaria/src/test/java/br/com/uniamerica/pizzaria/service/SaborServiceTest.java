package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.SaborDTO;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.repository.SaborRepository;
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
class SaborServiceTest {
    @Mock
    private SaborRepository saborRepository;

    @InjectMocks
    private SaborService saborService;

    @Test
    void testFindById() {
        Sabor sabor = new Sabor(); // Simulação de um sabor retornado pelo repositório
        when(saborRepository.findById(1L)).thenReturn(Optional.of(sabor));

        Optional<SaborDTO> saborDTO = saborService.findById(1L);

        assertTrue(saborDTO.isPresent());
        // Adicione testes para validar a conversão de Sabor para SaborDTO
    }

    @Test
    void testFindAll() {
        List<Sabor> sabores = Collections.singletonList(new Sabor()); // Simulação de lista de sabores retornada pelo repositório
        when(saborRepository.findAll()).thenReturn(sabores);

        List<SaborDTO> saboresDTO = saborService.findAll();

        assertFalse(saboresDTO.isEmpty());
        // Adicione testes para validar a conversão de List<Sabor> para List<SaborDTO>
    }

    @Test
    void testFindByAtivo() {
        List<Sabor> sabores = Collections.singletonList(new Sabor()); // Simulação de lista de sabores retornada pelo repositório
        when(saborRepository.findByAivo(true)).thenReturn(sabores);

        List<SaborDTO> saboresDTO = saborService.findByAtivo(true);

        assertFalse(saboresDTO.isEmpty());
        // Adicione testes para validar a conversão de List<Sabor> para List<SaborDTO>
    }
}
