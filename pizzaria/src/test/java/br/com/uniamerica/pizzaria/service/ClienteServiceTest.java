package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.ClienteDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.ClienteAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.ClienteCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.repository.ClienteRepository;
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
class ClienteServiceTest {
    @Mock
    private ClienteRepository clienteRepository;

    @InjectMocks
    private ClienteService clienteService;

    @Test
    void testFindById() {
        Cliente cliente = new Cliente(); // Simulação de um cliente retornado pelo repositório
        when(clienteRepository.findById(1L)).thenReturn(Optional.of(cliente));

        Optional<ClienteDTO> clienteDTO = clienteService.findById(1L);

        assertTrue(clienteDTO.isPresent());
        // Adicione testes para validar a conversão de Cliente para ClienteDTO
    }

    @Test
    void testFindAll() {
        List<Cliente> clientes = Collections.singletonList(new Cliente()); // Simulação de lista de clientes retornada pelo repositório
        when(clienteRepository.findAll()).thenReturn(clientes);

        List<ClienteDTO> clientesDTO = clienteService.findAll();

        assertFalse(clientesDTO.isEmpty());
        // Adicione testes para validar a conversão de List<Cliente> para List<ClienteDTO>
    }

    @Test
    void testFindByAtivo() {
        List<Cliente> clientes = Collections.singletonList(new Cliente()); // Simulação de lista de clientes retornada pelo repositório
        when(clienteRepository.findByAtivo(true)).thenReturn(clientes);

        List<ClienteDTO> clientesDTO = clienteService.findByAtivo(true);

        assertFalse(clientesDTO.isEmpty());
        // Adicione testes para validar a conversão de List<Cliente> para List<ClienteDTO>
    }
    @Test
    void testFindByName() {
        String nomeCliente = "Nome do Cliente";
        Cliente cliente = new Cliente();
        cliente.setNomeCliente(nomeCliente);

        when(clienteRepository.findByName(nomeCliente)).thenReturn(cliente);

        ClienteDTO result = clienteService.findByName(nomeCliente);

        assertEquals(nomeCliente, result.getNomeCliente()); // Verifica se o nome do cliente retornado está correto
    }

    @Test
    void testFindByCpf() {
        String cpf = "12345678900";
        Cliente cliente = new Cliente();
        cliente.setCpf(cpf);

        when(clienteRepository.findByCpf(cpf)).thenReturn(cliente);

        ClienteDTO result = clienteService.findByCpf(cpf);

        assertEquals(cpf, result.getCpf()); // Verifica se o CPF do cliente retornado está correto
    }
    @Test
    void testFindByDiaRegistro() {
        // Simula uma lista de clientes retornados pelo repositório para uma data específica
        LocalDate registro = LocalDate.now();
        List<Cliente> clientes = new ArrayList<>();
        // Adicione alguns clientes à lista simulada

        when(clienteRepository.findByDiaRegistro(registro)).thenReturn(clientes);

        List<ClienteCadastroDTO> result = clienteService.findByDiaRegistro(registro);

        assertEquals(clientes.size(), result.size()); // Verifica se a quantidade de DTOs retornados é a esperada
    }

    @Test
    void testFindByDiaAtualizar() {
        // Simula uma lista de clientes retornados pelo repositório para uma data específica
        LocalDate atualizar = LocalDate.now();
        List<Cliente> clientes = new ArrayList<>();
        // Adicione alguns clientes à lista simulada

        when(clienteRepository.findByDiaAtualizar(atualizar)).thenReturn(clientes);

        List<ClienteAtualizarDTO> result = clienteService.findByDiaAtualizar(atualizar);

        assertEquals(clientes.size(), result.size()); // Verifica se a quantidade de DTOs retornados é a esperada
    }

    @Test
    void testCadastrar() {
        Cliente cliente = new Cliente(); // Crie um cliente fictício para o teste

        // Simula o comportamento do repositório ao salvar um cliente
        when(clienteRepository.save(cliente)).thenReturn(cliente);

        clienteService.cadastrar(cliente);

        // Verifica se o método save do clienteRepository foi chamado uma vez
        verify(clienteRepository, times(1)).save(cliente);
    }

    @Test
    void testAtualizar_ClienteEncontrado() {
        Long id = 1L;
        Cliente cliente = new Cliente();

        Optional<Cliente> clienteOptional = Optional.of(cliente);

        when(clienteRepository.findById(id)).thenReturn(clienteOptional);
        when(clienteRepository.save(cliente)).thenReturn(cliente);

        clienteService.atualizar(id, cliente);

        verify(clienteRepository, times(1)).save(cliente);
    }
    @Test
    void testDeleteClient_ClienteEncontrado() {
        Long id = 1L;

        when(clienteRepository.findById(id)).thenReturn(Optional.of(new Cliente()));

        clienteService.deleteClient(id);

        verify(clienteRepository, times(1)).deleteById(id);
    }

    @Test
    void testDeleteClient_ClienteNaoEncontrado() {
        Long id = 1L;

        when(clienteRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(IllegalArgumentException.class, () -> clienteService.deleteClient(id));
    }

    @Test
    void testDesativar_ClienteEncontrado() {
        Long id = 1L;
        Cliente cliente = new Cliente(); // Crie um cliente fictício para o teste

        when(clienteRepository.findById(id)).thenReturn(Optional.of(cliente));
        when(clienteRepository.save(cliente)).thenReturn(cliente);

        assertThrows(IllegalArgumentException.class, () -> clienteService.desativar(id));
    }
}
