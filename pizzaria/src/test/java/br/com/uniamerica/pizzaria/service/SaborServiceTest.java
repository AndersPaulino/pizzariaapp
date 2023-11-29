package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.SaborDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.SaborAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.SaborCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.repository.SaborRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static ch.qos.logback.core.joran.spi.ConsoleTarget.findByName;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

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
    @Test
    void testFindByName() {
        String nomeSabor = "Sabor Teste";
        Sabor sabor = new Sabor();
        when(saborRepository.findByName(nomeSabor)).thenReturn(sabor);

        SaborDTO saborDTO = saborService.findByName(nomeSabor);

        assertNotNull(saborDTO);
    }
    @Test
    void testFindByDiaRegistro() {
        LocalDate registro = LocalDate.now();

        List<Sabor> sabores = new ArrayList<>();

        when(saborRepository.findByDiaRegistro(registro)).thenReturn(sabores);

        SaborService saborService = new SaborService(saborRepository);

        List<SaborCadastroDTO> result = saborService.findByDiaRegistro(registro);
        assertEquals(sabores.size(), result.size());
    }

    @Test
    void testFindByDiaAtualizar() {
        LocalDate atualizar = LocalDate.now();
        List<Sabor> sabores = new ArrayList<>();

        when(saborRepository.findByDiaAtualizar(atualizar)).thenReturn(sabores);

        SaborService saborService = new SaborService(saborRepository);

        List<SaborAtualizarDTO> result = saborService.findByDiaAtualizar(atualizar);

        assertEquals(sabores.size(), result.size());
    }

    @Test
    void testCadastrar() {
        Sabor sabor = new Sabor();
        when(saborRepository.save(sabor)).thenReturn(sabor);
        SaborService saborService = new SaborService(saborRepository);

        saborService.cadastrar(sabor);
    }
    @Test
    void testAtualizar() {
        Long id = 1L;
        String novoNome = "Novo Sabor";

        Sabor saborExistente = new Sabor();
        saborExistente.setNomeSabor("Sabor Existente");
        Sabor saborAtualizado = new Sabor();
        saborAtualizado.setNomeSabor(novoNome);

        when(saborRepository.findById(id)).thenReturn(Optional.of(saborExistente));
        when(saborRepository.save(any(Sabor.class))).thenReturn(saborExistente);

        SaborService saborService = new SaborService(saborRepository);
        saborService.atualizar(id, saborAtualizado);

        assertEquals(novoNome, saborExistente.getNomeSabor());
        verify(saborRepository, times(1)).save(saborExistente);
    }

    @Test
    void testDeletaSabor() {
        Long id = 1L;

        Sabor saborParaDeletar = new Sabor();

        when(saborRepository.findById(id)).thenReturn(Optional.of(saborParaDeletar));

        SaborService saborService = new SaborService(saborRepository);
        saborService.deletaSabor(id);

        verify(saborRepository, times(1)).delete(saborParaDeletar);
    }

    @Test
    void testDesativar() {
        Long id = 1L;

        Sabor saborAtivo = new Sabor();
        saborAtivo.setAtivo(true);

        when(saborRepository.findById(id)).thenReturn(Optional.of(saborAtivo));

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            saborService.desativar(id);
        });

        assertEquals("Sabor desativado com sucesso!", exception.getMessage());
        assertFalse(saborAtivo.isAtivo());
        verify(saborRepository, times(1)).save(saborAtivo);
    }
}
