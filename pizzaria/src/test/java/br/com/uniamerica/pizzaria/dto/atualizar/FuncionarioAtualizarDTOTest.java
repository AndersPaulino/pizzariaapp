package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Funcionario;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class FuncionarioAtualizarDTOTest {
    private Funcionario funcionario;
    private FuncionarioAtualizarDTO funcionarioDTO;

    @Test
    void testConstructorWithEntity() {
        // Criando um funcionário fictício para utilizar nos testes
        funcionario = new Funcionario();
        funcionario.setNomeFuncionario("Ana");
        funcionario.setAtivo(true);
        funcionario.setAtualizar(LocalDateTime.now());

        // Criando um objeto FuncionarioAtualizarDTO utilizando o construtor com uma entidade Funcionario
        FuncionarioAtualizarDTO funcionarioDTO = new FuncionarioAtualizarDTO(funcionario);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(funcionarioDTO.getId()).isEqualTo(funcionario.getId());
        assertThat(funcionarioDTO.getNomeFuncionario()).isEqualTo(funcionario.getNomeFuncionario());
        assertThat(funcionarioDTO.isAtivo()).isEqualTo(funcionario.isAtivo());
        assertThat(funcionarioDTO.getAtualizar()).isEqualTo(funcionario.getAtualizar());
    }

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 2L;
        String nomeFuncionario = "José";
        boolean ativo = true;
        LocalDateTime atualizar = LocalDateTime.now();

        // Criando um objeto FuncionarioAtualizarDTO utilizando o construtor com parâmetros
        funcionarioDTO = new FuncionarioAtualizarDTO(id, nomeFuncionario, ativo, atualizar);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(funcionarioDTO.getId()).isEqualTo(id);
        assertThat(funcionarioDTO.getNomeFuncionario()).isEqualTo(nomeFuncionario);
        assertThat(funcionarioDTO.isAtivo()).isEqualTo(ativo);
        assertThat(funcionarioDTO.getAtualizar()).isEqualTo(atualizar);
    }
}
