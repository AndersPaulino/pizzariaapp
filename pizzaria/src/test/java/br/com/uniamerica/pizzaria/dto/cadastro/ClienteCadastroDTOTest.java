package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.entity.Endereco;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class ClienteCadastroDTOTest {
    private Cliente cliente;
    private ClienteCadastroDTO clienteDTO;

    @Test
    void testConstructorWithEntity() {
        // Criando um cliente fictício para utilizar nos testes
        cliente = new Cliente();
        cliente.setNomeCliente("João");
        cliente.setCpf("12345678900");
        cliente.setAtivo(true);
        cliente.setEndereco(new ArrayList<>()); // Supondo que o cliente não tem endereço associado
        cliente.setRegistro(LocalDateTime.now());

        // Criando um objeto ClienteCadastroDTO utilizando o construtor com uma entidade Cliente
        clienteDTO = new ClienteCadastroDTO(cliente);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(clienteDTO.getId()).isEqualTo(cliente.getId());
        assertThat(clienteDTO.getNomeCliente()).isEqualTo(cliente.getNomeCliente());
        assertThat(clienteDTO.getCpf()).isEqualTo(cliente.getCpf());
        assertThat(clienteDTO.isAtivo()).isEqualTo(cliente.isAtivo());
        assertThat(clienteDTO.getEndereco()).isEqualTo(cliente.getEndereco());
        assertThat(clienteDTO.getRegistro()).isEqualTo(cliente.getRegistro());
    }

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 2L;
        String nomeCliente = "Maria";
        String cpf = "98765432100";
        boolean ativo = true;
        List<Endereco> endereco = new ArrayList<>(); // Lista vazia de endereços
        LocalDateTime registro = LocalDateTime.now();

        // Criando um objeto ClienteCadastroDTO utilizando o construtor com parâmetros
        clienteDTO = new ClienteCadastroDTO(id, nomeCliente, ativo, cpf, endereco, registro);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(clienteDTO.getId()).isEqualTo(id);
        assertThat(clienteDTO.getNomeCliente()).isEqualTo(nomeCliente);
        assertThat(clienteDTO.getCpf()).isEqualTo(cpf);
        assertThat(clienteDTO.isAtivo()).isEqualTo(ativo);
        assertThat(clienteDTO.getEndereco()).isEqualTo(endereco);
        assertThat(clienteDTO.getRegistro()).isEqualTo(registro);
    }
}
