package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Bebida;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class BebidaCadastroDTOTest {
    private Bebida bebida;

    private BebidaCadastroDTO bebidaDTO;

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 1L;
        String nomeBebida = "Coca-Cola";
        BigDecimal valorBebida = BigDecimal.valueOf(5.0);
        boolean ativo = true;
        LocalDateTime registro = LocalDateTime.now();

        // Criando um objeto BebidaCadastroDTO utilizando o construtor com parâmetros
        bebidaDTO = new BebidaCadastroDTO(id, nomeBebida, valorBebida, ativo, registro);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(bebidaDTO.getId()).isEqualTo(id);
        assertThat(bebidaDTO.getNomeBebida()).isEqualTo(nomeBebida);
        assertThat(bebidaDTO.getValorBebida()).isEqualByComparingTo(valorBebida);
        assertThat(bebidaDTO.isAtivo()).isEqualTo(ativo);
        assertThat(bebidaDTO.getRegistro()).isEqualTo(registro);
    }

    @Test
    void testConstructorWithEntity() {
        // Dados de exemplo para serem utilizados no teste
        bebida = new Bebida();
        bebida.setNomeBebida("Guaraná");
        bebida.setValorBebida(BigDecimal.valueOf(4.0));
        bebida.setAtivo(true);
        bebida.setRegistro(LocalDateTime.now());

        // Criando um objeto BebidaCadastroDTO utilizando o construtor com uma entidade Bebida
        bebidaDTO = new BebidaCadastroDTO(bebida);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(bebidaDTO.getId()).isEqualTo(bebida.getId());
        assertThat(bebidaDTO.getNomeBebida()).isEqualTo(bebida.getNomeBebida());
        assertThat(bebidaDTO.getValorBebida()).isEqualByComparingTo(bebida.getValorBebida());
        assertThat(bebidaDTO.isAtivo()).isEqualTo(bebida.isAtivo());
        assertThat(bebidaDTO.getRegistro()).isEqualTo(bebida.getRegistro());
    }
}

