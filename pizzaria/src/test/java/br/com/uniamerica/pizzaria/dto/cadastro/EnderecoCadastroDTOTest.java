package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Endereco;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class EnderecoCadastroDTOTest {
    private Endereco endereco;
    private EnderecoCadastroDTO enderecoDTO;

    @Test
    void testConstructorWithEntity() {
        // Criando um endereço fictício para utilizar nos testes
        endereco = new Endereco();
        endereco.setBairro("Centro");
        endereco.setRua("Rua Principal");
        endereco.setNumero(10);
        endereco.setRegistro(LocalDateTime.now());

        // Criando um objeto EnderecoCadastroDTO utilizando o construtor com uma entidade Endereco
        enderecoDTO = new EnderecoCadastroDTO(endereco);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(enderecoDTO.getId()).isEqualTo(endereco.getId());
        assertThat(enderecoDTO.getBairro()).isEqualTo(endereco.getBairro());
        assertThat(enderecoDTO.getRua()).isEqualTo(endereco.getRua());
        assertThat(enderecoDTO.getNumero()).isEqualTo(endereco.getNumero());
        assertThat(enderecoDTO.getRegistro()).isEqualTo(endereco.getRegistro());
    }

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 2L;
        String bairro = "Bairro Novo";
        String rua = "Rua Secundária";
        int numero = 20;
        LocalDateTime registro = LocalDateTime.now();

        // Criando um objeto EnderecoCadastroDTO utilizando o construtor com parâmetros
        enderecoDTO = new EnderecoCadastroDTO(id, true, bairro, rua, numero, registro);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(enderecoDTO.getId()).isEqualTo(id);
        assertThat(enderecoDTO.isAtivo());
        assertThat(enderecoDTO.getBairro()).isEqualTo(bairro);
        assertThat(enderecoDTO.getRua()).isEqualTo(rua);
        assertThat(enderecoDTO.getNumero()).isEqualTo(numero);
        assertThat(enderecoDTO.getRegistro()).isEqualTo(registro);
    }
}
