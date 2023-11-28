package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Cliente;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class ClienteDTOTest {
    private Cliente cliente;
    private ClienteDTO clienteDTO;

    @Test
    void testConstructorWithCliente(){
        cliente = new Cliente();
        cliente.setNomeCliente("Anderson");
        clienteDTO = new ClienteDTO(cliente);

        assertEquals(cliente.getId(), clienteDTO.getId());
        assertEquals(cliente.getNomeCliente(), clienteDTO.getNomeCliente());
        assertEquals(cliente.isAtivo(), clienteDTO.isAtivo());
        assertEquals(cliente.getRegistro(), clienteDTO.getRegistro());
        assertEquals(cliente.getAtualizar(), clienteDTO.getAtualizar());
    }

    @Test
    void testeConstructorWithIndividualsParameters(){
        clienteDTO = new ClienteDTO(1L, true, "Anderson", LocalDateTime.now(), LocalDateTime.now());

        assertEquals(1L, clienteDTO.getId());
        assertEquals("Anderson", clienteDTO.getNomeCliente());
        assertEquals(true, clienteDTO.isAtivo());
    }
}
