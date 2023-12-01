package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Funcionario;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class FuncionarioDTOTest {
    private Funcionario funcionario;
    private FuncionarioDTO funcionarioDTO;

    @Test
    void testeConstructorWithFuncionario(){
        funcionario = new Funcionario();
        funcionarioDTO = new FuncionarioDTO(funcionario);

        assertEquals(funcionario.getId(), funcionarioDTO.getId());
        assertEquals(funcionario.isAtivo(), funcionarioDTO.isAtivo());
        assertEquals(funcionario.getNomeFuncionario(), funcionarioDTO.getNomeFuncionario());
        assertEquals(funcionario.getAtualizar(), funcionarioDTO.getAtualizar());
        assertEquals(funcionario.getRegistro(), funcionarioDTO.getRegistro());
    }

    @Test
    void testConstructorWithIndividualsParameters(){
        funcionarioDTO = new FuncionarioDTO(1L, true, "Anderson", LocalDateTime.now(), LocalDateTime.now());

        assertEquals(1L, funcionarioDTO.getId());
        assertEquals(true, funcionarioDTO.isAtivo());
        assertEquals("Anderson", funcionarioDTO.getNomeFuncionario());
    }
}
