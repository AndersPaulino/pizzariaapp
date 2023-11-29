package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.BebidaDTO;
import br.com.uniamerica.pizzaria.entity.Bebida;
import br.com.uniamerica.pizzaria.repository.BebidaRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class BebidaServiceTest {
    @Mock
    private BebidaRepository bebidaRepository;

    @InjectMocks
    private BebidaService bebidaService;

    @Test
    void testFindById() {
        Long id = 1L;
        Bebida bebida = new Bebida(); // Crie uma bebida fictícia para os testes
        when(bebidaRepository.findById(id)).thenReturn(Optional.of(bebida));

        Optional<BebidaDTO> bebidaDTO = bebidaService.findById(id);

        assertTrue(bebidaDTO.isPresent());
        // Adicione aqui testes para garantir a conversão correta para Optional<BebidaDTO>
    }

    @Test
    void testFindAll() {
        List<Bebida> bebidas = Collections.singletonList(new Bebida()); // Crie uma lista fictícia de bebidas
        when(bebidaRepository.findAll()).thenReturn(bebidas);

        List<BebidaDTO> bebidasDTO = bebidaService.findAll();

        assertFalse(bebidasDTO.isEmpty());
        // Adicione aqui testes para garantir a conversão correta para lista de BebidaDTO
    }

    @Test
    void testFindByName() {
        String nomeBebida = "Coca-Cola";
        Bebida bebida = new Bebida(); // Crie uma bebida fictícia para os testes
        when(bebidaRepository.findByName(nomeBebida)).thenReturn(bebida);

        BebidaDTO bebidaDTO = bebidaService.findByName(nomeBebida);

        assertNotNull(bebidaDTO);
        // Adicione aqui testes para garantir a conversão correta para BebidaDTO
    }
}
