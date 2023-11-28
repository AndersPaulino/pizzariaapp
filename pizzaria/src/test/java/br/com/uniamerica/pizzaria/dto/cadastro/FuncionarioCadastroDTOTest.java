package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Funcionario;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@ExtendWith(MockitoExtension.class)
class FuncionarioCadastroDTOTest {
    private Funcionario funcionario;
    private FuncionarioCadastroDTO funcionarioDTO;

    @Test
    void testConstructorWithEntity() {
        // Criando um funcionário fictício para utilizar nos testes
        funcionario = new Funcionario();
        funcionario.setNomeFuncionario("Ana");
        funcionario.setAtivo(true);
        funcionario.setRegistro(LocalDateTime.now());

        // Criando um objeto FuncionarioCadastradoDTO utilizando o construtor com uma entidade Funcionario
        funcionarioDTO = new FuncionarioCadastroDTO(funcionario);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(funcionarioDTO.getId()).isEqualTo(funcionario.getId());
        assertThat(funcionarioDTO.getNomeFuncionario()).isEqualTo(funcionario.getNomeFuncionario());
        assertThat(funcionarioDTO.isAtivo()).isEqualTo(funcionario.isAtivo());
        assertThat(funcionarioDTO.getRegistro()).isEqualTo(funcionario.getRegistro());
    }

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 2L;
        String nomeFuncionario = "José";
        boolean ativo = true;
        LocalDateTime registro = LocalDateTime.now();

        // Criando um objeto FuncionarioCadastradoDTO utilizando o construtor com parâmetros
        funcionarioDTO = new FuncionarioCadastroDTO(id, nomeFuncionario, ativo, registro);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(funcionarioDTO.getId()).isEqualTo(id);
        assertThat(funcionarioDTO.getNomeFuncionario()).isEqualTo(nomeFuncionario);
        assertThat(funcionarioDTO.isAtivo()).isEqualTo(ativo);
        assertThat(funcionarioDTO.getRegistro()).isEqualTo(registro);
    }
}
