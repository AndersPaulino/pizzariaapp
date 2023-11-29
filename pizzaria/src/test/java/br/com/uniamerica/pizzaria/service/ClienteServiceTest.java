package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.ClienteDTO;
import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.repository.ClienteRepository;
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
}
