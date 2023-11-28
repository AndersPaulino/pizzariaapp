package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Bebida;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class BebidaAtualizarDTOTest {
    private BebidaAtualizarDTO bebidaDTO;
    private Bebida bebida;
    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 1L;
        String nomeBebida = "Coca-Cola";
        BigDecimal valorBebida = BigDecimal.valueOf(5.0);
        boolean ativo = true;
        LocalDateTime atualizar = LocalDateTime.now();

        // Criando um objeto BebidaAtualizarDTO utilizando o construtor com parâmetros
       bebidaDTO = new BebidaAtualizarDTO(id, nomeBebida, valorBebida, ativo, atualizar);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(bebidaDTO.getId()).isEqualTo(id);
        assertThat(bebidaDTO.getNomeBebida()).isEqualTo(nomeBebida);
        assertThat(bebidaDTO.getValorBebida()).isEqualByComparingTo(valorBebida);
        assertThat(bebidaDTO.isAtivo()).isEqualTo(ativo);
        assertThat(bebidaDTO.getAtualizar()).isEqualTo(atualizar);
    }

    @Test
    void testConstructorWithEntity() {
        // Dados de exemplo para serem utilizados no teste
        bebida = new Bebida();
        bebida.setNomeBebida("Guaraná");
        bebida.setValorBebida(BigDecimal.valueOf(4.0));
        bebida.setAtivo(true);
        bebida.setAtualizar(LocalDateTime.now());

        // Criando um objeto BebidaAtualizarDTO utilizando o construtor com uma entidade Bebida
        bebidaDTO = new BebidaAtualizarDTO(bebida);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(bebidaDTO.getId()).isEqualTo(bebida.getId());
        assertThat(bebidaDTO.getNomeBebida()).isEqualTo(bebida.getNomeBebida());
        assertThat(bebidaDTO.getValorBebida()).isEqualByComparingTo(bebida.getValorBebida());
        assertThat(bebidaDTO.isAtivo()).isEqualTo(bebida.isAtivo());
        assertThat(bebidaDTO.getAtualizar()).isEqualTo(bebida.getAtualizar());
    }
}
