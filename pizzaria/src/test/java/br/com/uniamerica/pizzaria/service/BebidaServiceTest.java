package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.BebidaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.BebidaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.BebidaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Bebida;
import br.com.uniamerica.pizzaria.repository.BebidaRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

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
    @Test
    void testFindByAtivo() {
        // Criando alguns dados de bebida simulados
        Bebida bebida1 = new Bebida();
        Bebida bebida2 = new Bebida();

        bebida1.setNomeBebida("Coca-Cola");
        bebida2.setAtivo(false);

        // Configurando o comportamento simulado do repository
        when(bebidaRepository.findByAtivo(true)).thenReturn(Collections.singletonList(bebida1));

        // Chamando o método do serviço
        List<BebidaDTO> bebidasAtivas = bebidaService.findByAtivo(true);

        // Verificando se o serviço retornou a bebida ativa
        assertEquals(1, bebidasAtivas.size());
        assertEquals("Coca-Cola", bebidasAtivas.get(0).getNomeBebida()); // Suponho que exista um método getNomeBebida()
    }


    // Testes similares para os outros métodos...

    @Test
    void testDeleteBebida() {
        // Simulando a existência de uma bebida com ID 1
        Bebida bebida = new Bebida();
        when(bebidaRepository.findById(1L)).thenReturn(Optional.of(bebida));

        // Chamando o método delete
        bebidaService.deleteBebida(1L);

        // Verificando se o método delete do repositório foi chamado
        verify(bebidaRepository, times(1)).delete(bebida);
    }
    @Test
    void testFindByDiaRegistro() {
        // Criando uma data fictícia para o teste
        LocalDate dataRegistro = LocalDate.now();

        // Simulando uma lista de bebidas encontradas com a data de registro
        Bebida bebida1 = new Bebida();
        Bebida bebida2 = new Bebida();
        List<Bebida> bebidasEncontradas = List.of(bebida1, bebida2);

        // Configurando o comportamento simulado do repository
        when(bebidaRepository.findByDiaRegistro(dataRegistro)).thenReturn(bebidasEncontradas);
        List<BebidaCadastroDTO> bebidasCadastroDTO = bebidaService.findByDiaRegistro(dataRegistro);
        assertEquals(2, bebidasCadastroDTO.size());
    }
    @Test
    void testFindByDiaAtualizar() {
        // Criando uma data fictícia para o teste
        LocalDate dataAtualizar = LocalDate.now();

        // Simulando uma lista de bebidas encontradas com a data de atualização
        Bebida bebida1 = new Bebida();
        Bebida bebida2 = new Bebida();
        List<Bebida> bebidasEncontradas = List.of(bebida1, bebida2);

        // Configurando o comportamento simulado do repository
        when(bebidaRepository.findByDiaAtualizar(dataAtualizar)).thenReturn(bebidasEncontradas);

        // Chamando o método do serviço
        List<BebidaAtualizarDTO> bebidasAtualizarDTO = bebidaService.findByDiaAtualizar(dataAtualizar);

        // Verificando se o serviço retornou as bebidas convertidas corretamente para DTO
        assertEquals(2, bebidasAtualizarDTO.size());
    }
    @Test
    void testCadastrar() {
        // Criando uma bebida fictícia para o teste
        Bebida bebida = new Bebida();
        bebida.setNomeBebida("Coca-Cola");
        bebida.setValorBebida(BigDecimal.valueOf(2.50)); // Defina o valor da bebida conforme a sua classe

        // Chamando o método cadastrar do serviço
        bebidaService.cadastrar(bebida);

        // Verificando se o método save do repositório foi chamado com a bebida correta
        verify(bebidaRepository).save(bebida);
    }
    @Test
    void testValidarBebidaComNomeNulo() {
        Bebida bebida = new Bebida();
        bebida.setNomeBebida(null);
        bebida.setValorBebida(BigDecimal.valueOf(2.50)); // Ajuste o valor conforme necessário

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            bebidaService.validarBebibda(bebida);
        });

        assertEquals("Nome da Bebida não informado!", exception.getMessage());
    }

    @Test
    void testValidarBebidaComNomeVazio() {
        Bebida bebida = new Bebida();
        bebida.setNomeBebida("");
        bebida.setValorBebida(BigDecimal.valueOf(2.50)); // Ajuste o valor conforme necessário

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            bebidaService.validarBebibda(bebida);
        });

        assertEquals("Nome da Bebida não informado!", exception.getMessage());
    }

    @Test
    void testValidarBebidaComValorNulo() {
        Bebida bebida = new Bebida();
        bebida.setNomeBebida("Coca-Cola");
        bebida.setValorBebida(null);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            bebidaService.validarBebibda(bebida);
        });

        assertEquals("Valor da Bebida não informado!", exception.getMessage());
    }

    @Test
    void testValidarBebidaComNomeEValorPreenchidos() {
        Bebida bebida = new Bebida();
        bebida.setNomeBebida("Coca-Cola");
        bebida.setValorBebida(BigDecimal.valueOf(2.50)); // Ajuste o valor conforme necessário

        assertDoesNotThrow(() -> {
            bebidaService.validarBebibda(bebida);
        });
    }

    @Test
    void testAtualizarComNomeEValorModificados() {
        Long id = 1L;
        Bebida bebida = new Bebida();
        bebida.setNomeBebida("Nova Bebida");
        bebida.setValorBebida(BigDecimal.valueOf(2.0));

        Bebida bebidaExistente = new Bebida();
        bebidaExistente.setNomeBebida("Bebida Antiga");
        bebidaExistente.setValorBebida(BigDecimal.valueOf(1.0));

        when(bebidaRepository.findById(id)).thenReturn(Optional.of(bebidaExistente));
        when(bebidaRepository.save(Mockito.any(Bebida.class))).thenReturn(bebidaExistente);

        bebidaService.atualizar(id, bebida);

        assertEquals("Nova Bebida", bebidaExistente.getNomeBebida());
        assertEquals(BigDecimal.valueOf(2.0), bebidaExistente.getValorBebida());
    }
    @Test
    void testDesativarBebidaExistente() {
        Long id = 1L;
        Bebida bebida = new Bebida();
        bebida.setAtivo(true);

        // Simulando a existência da bebida com o ID fornecido
        when(bebidaRepository.findById(id)).thenReturn(Optional.of(bebida));

        // Chamando o método de desativar
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            bebidaService.desativar(id);
        });

        assertEquals("Bebida desativado com sucesso!", exception.getMessage());
        assertFalse(bebida.isAtivo());
        verify(bebidaRepository, times(1)).save(bebida);
    }
}
