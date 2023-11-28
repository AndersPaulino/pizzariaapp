package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Endereco;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class EnderecoAtualizarDTOTest {
    private Endereco endereco;
    private EnderecoAtualizarDTO enderecoDTO;

    @Test
    void testConstructorWithEntity() {
        // Criando um endereço fictício para utilizar nos testes
        endereco = new Endereco();
        endereco.setBairro("Centro");
        endereco.setRua("Rua Principal");
        endereco.setNumero(10);
        endereco.setAtualizar(LocalDateTime.now());

        // Criando um objeto EnderecoAtualizarDTO utilizando o construtor com uma entidade Endereco
        enderecoDTO = new EnderecoAtualizarDTO(endereco);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(enderecoDTO.getId()).isEqualTo(endereco.getId());
        assertThat(enderecoDTO.getBairro()).isEqualTo(endereco.getBairro());
        assertThat(enderecoDTO.getRua()).isEqualTo(endereco.getRua());
        assertThat(enderecoDTO.getNumero()).isEqualTo(endereco.getNumero());
        assertThat(enderecoDTO.getAtualizar()).isEqualTo(endereco.getAtualizar());
    }

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 2L;
        String bairro = "Bairro Novo";
        String rua = "Rua Secundária";
        int numero = 20;
        LocalDateTime atualizar = LocalDateTime.now();

        // Criando um objeto EnderecoAtualizarDTO utilizando o construtor com parâmetros
        enderecoDTO = new EnderecoAtualizarDTO(id, bairro, rua, numero, atualizar);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(enderecoDTO.getId()).isEqualTo(id);
        assertThat(enderecoDTO.getBairro()).isEqualTo(bairro);
        assertThat(enderecoDTO.getRua()).isEqualTo(rua);
        assertThat(enderecoDTO.getNumero()).isEqualTo(numero);
        assertThat(enderecoDTO.getAtualizar()).isEqualTo(atualizar);
    }
}
