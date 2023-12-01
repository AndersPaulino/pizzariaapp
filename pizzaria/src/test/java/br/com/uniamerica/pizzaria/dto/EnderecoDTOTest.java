package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Endereco;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class EnderecoDTOTest {
    private Endereco endereco;
    private EnderecoDTO enderecoDTO;

    @Test
    void testeConstructorWithEndereco(){
        endereco = new Endereco();
        enderecoDTO = new EnderecoDTO(endereco);

        assertEquals(endereco.getId(), enderecoDTO.getId());
        assertEquals(endereco.getRua(), enderecoDTO.getRua());
        assertEquals(endereco.getBairro(), enderecoDTO.getBairro());
        assertEquals(endereco.getNumero(), enderecoDTO.getNumero());
        assertEquals(endereco.isAtivo(), enderecoDTO.isAtivo());
        assertEquals(endereco.getRegistro(), enderecoDTO.getRegistro());
        assertEquals(endereco.getAtualizar(), enderecoDTO.getAtualizar());
    }

    @Test
    void testConstructorWithIndividualsParameters(){
        enderecoDTO = new EnderecoDTO(1L, true, LocalDateTime.now(), LocalDateTime.now(), "Flores", "Flores", 33);

        assertEquals(1L, enderecoDTO.getId());
        assertEquals("Flores", enderecoDTO.getBairro());
        assertEquals("Flores", enderecoDTO.getRua());
        assertEquals(33, enderecoDTO.getNumero());
    }
}
