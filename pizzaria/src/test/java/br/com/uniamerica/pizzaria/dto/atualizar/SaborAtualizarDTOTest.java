package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Sabor;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class SaborAtualizarDTOTest {
    private Sabor sabor;
    private SaborAtualizarDTO saborDTO;
    @Test
    void testConstructorWithEntity() {
        // Criando um sabor fictício para utilizar nos testes
        sabor = new Sabor();
        sabor.setAtivo(true);
        sabor.setAtualizar(LocalDateTime.now());
        sabor.setNomeSabor("Sabor de teste");

        // Criando um objeto SaborAtualizarDTO utilizando o construtor com uma entidade Sabor
        saborDTO = new SaborAtualizarDTO(sabor);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(saborDTO.getId()).isEqualTo(sabor.getId());
        assertThat(saborDTO.isAtivo()).isEqualTo(sabor.isAtivo());
        assertThat(saborDTO.getAtualizar()).isEqualTo(sabor.getAtualizar());
        assertThat(saborDTO.getNomeSabor()).isEqualTo(sabor.getNomeSabor());
    }

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 2L;
        boolean ativo = false;
        LocalDateTime atualizar = LocalDateTime.now();
        String nomeSabor = "Outro sabor de teste";

        // Criando um objeto SaborAtualizarDTO utilizando o construtor com parâmetros
        saborDTO = new SaborAtualizarDTO(id, ativo, atualizar, nomeSabor);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(saborDTO.getId()).isEqualTo(id);
        assertThat(saborDTO.isAtivo()).isEqualTo(ativo);
        assertThat(saborDTO.getAtualizar()).isEqualTo(atualizar);
        assertThat(saborDTO.getNomeSabor()).isEqualTo(nomeSabor);
    }
}
