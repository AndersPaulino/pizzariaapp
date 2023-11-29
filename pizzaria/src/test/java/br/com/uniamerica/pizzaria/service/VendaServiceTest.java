package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.VendaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.VendaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.VendaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Venda;
import br.com.uniamerica.pizzaria.repository.VendaRepository;
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

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

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
    @Test
    void testFindByDiaRegistro() {
        // Criando uma data para simular a busca por dia de registro
        LocalDate registro = LocalDate.now();

        // Simulando uma lista de vendas retornada pelo repositório
        List<Venda> vendasMock = new ArrayList<>();
        // Adicione algumas vendas fictícias à lista de vendas

        // Simulando o comportamento do repositório
        when(vendaRepository.findByDiaRegistro(registro)).thenReturn(vendasMock);

        // Chamando o método do serviço
        List<VendaCadastroDTO> result = vendaService.findByDiaRegistro(registro);

        // Verificando se a lista de DTOs de vendas foi retornada corretamente
        assertNotNull(result);
        // Adicione asserções para verificar a lista de DTOs de vendas resultante
    }

    @Test
    void testFindByDiaAtualizar() {
        // Criando uma data para simular a busca por dia de atualização
        LocalDate atualizar = LocalDate.now();

        // Simulando uma lista de vendas retornada pelo repositório
        List<Venda> vendasMock = new ArrayList<>();
        // Adicione algumas vendas fictícias à lista de vendas

        // Simulando o comportamento do repositório
        when(vendaRepository.findByDiaAtualizar(atualizar)).thenReturn(vendasMock);

        // Chamando o método do serviço
        List<VendaAtualizarDTO> result = vendaService.findByDiaAtualizar(atualizar);

        // Verificando se a lista de DTOs de vendas foi retornada corretamente
        assertNotNull(result);
        // Adicione asserções para verificar a lista de DTOs de vendas resultante
    }

    @Test
    void testCadastrar() {
        vendaRepository = mock(VendaRepository.class);
        vendaService = new VendaService(vendaRepository);

        Venda venda = new Venda();

        // Simula o comportamento do repositório ao salvar uma venda
        when(vendaRepository.save(venda)).thenReturn(venda);

        // Chamando o método do serviço para cadastrar a venda
        vendaService.cadastrar(venda);

        // Verifica se o método save foi chamado uma vez com o objeto venda como argumento
        verify(vendaRepository, times(1)).save(venda);
    }
    @Test
    void testDeleteVenda() {
        Long id = 1L;
        Venda venda = new Venda(); // Crie uma venda fictícia para os testes

        // Simulando o comportamento do repositório ao deletar uma venda
        when(vendaRepository.findById(id)).thenReturn(Optional.of(venda));

        // Chamando o método do serviço para deletar a venda
        vendaService.deleteVenda(id);

        // Verificando se o método de deleção foi chamado corretamente
        verify(vendaRepository, times(1)).delete(venda);
    }
}
