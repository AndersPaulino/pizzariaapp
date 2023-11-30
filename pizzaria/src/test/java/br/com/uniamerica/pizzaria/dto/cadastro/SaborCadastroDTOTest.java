package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Sabor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class SaborCadastroDTOTest {
    private SaborCadastroDTO saborCadastroDTO;

    @BeforeEach
    void setUp() {
        // Dados fictícios para simular um sabor
        Long id = 1L;
        boolean ativo = true;
        LocalDateTime registro = LocalDateTime.now();
        String nomeSabor = "Queijo";

        // Criando uma instância de SaborCadastroDTO para teste
        saborCadastroDTO = new SaborCadastroDTO(id, ativo, registro, nomeSabor);
    }

    @Test
    void testConstructorWithEntity() {
        // Crie uma instância fictícia de Sabor para simular os dados
        Sabor sabor = new Sabor(/* Dados do sabor para teste */);

        // Crie o objeto SaborCadastroDTO com base na entidade Sabor
        saborCadastroDTO = new SaborCadastroDTO(sabor);

        // Verifique se os valores foram atribuídos corretamente
        assertThat(saborCadastroDTO.getId()).isEqualTo(sabor.getId());
        assertThat(saborCadastroDTO.isAtivo()).isEqualTo(sabor.isAtivo());
        assertThat(saborCadastroDTO.getRegistro()).isEqualTo(sabor.getRegistro());
        assertThat(saborCadastroDTO.getNomeSabor()).isEqualTo(sabor.getNomeSabor());
    }

    @Test
    void testConstructorWithFields() {
        // Verifique se os valores definidos no setUp estão corretos
        assertThat(saborCadastroDTO.getId()).isEqualTo(1L);
        assertThat(saborCadastroDTO.isAtivo()).isTrue();
        assertThat(saborCadastroDTO.getRegistro()).isNotNull(); // Verifique de acordo com o LocalDateTime gerado
        assertThat(saborCadastroDTO.getNomeSabor()).isEqualTo("Queijo");
    }
}
