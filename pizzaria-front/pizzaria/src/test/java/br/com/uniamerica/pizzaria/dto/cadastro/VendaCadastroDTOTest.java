package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class VendaCadastroDTOTest {
    private VendaCadastroDTO vendaCadastroDTO;

    @BeforeEach
    void setUp() {
        // Dados fictícios para simular uma venda
        Long id = 1L;
        List<Cliente> cliente = new ArrayList<>();
        List<Funcionario> funcionario = new ArrayList<>();
        List<Pizza> pizzas = new ArrayList<>();
        List<Bebida> bebidas = new ArrayList<>();
        BigDecimal valorVenda = BigDecimal.valueOf(200.0);
        LocalDateTime registro = LocalDateTime.now();

        // Criando uma instância de VendaCadastroDTO para teste
        vendaCadastroDTO = new VendaCadastroDTO(id, cliente, funcionario, pizzas, bebidas, valorVenda, registro);
    }

    @Test
    void testConstructorWithEntity() {
        // Crie uma instância fictícia de Venda para simular os dados
        Venda venda = new Venda(/* Dados de venda para teste */);

        // Crie o objeto VendaCadastroDTO com base na entidade Venda
        vendaCadastroDTO = new VendaCadastroDTO(venda);

        // Verifique se os valores foram atribuídos corretamente
        assertThat(vendaCadastroDTO.getId()).isEqualTo(venda.getId());
        assertThat(vendaCadastroDTO.getCliente()).isEqualTo(venda.getCliente());
        assertThat(vendaCadastroDTO.getFuncionario()).isEqualTo(venda.getFuncionario());
        assertThat(vendaCadastroDTO.getPizzas()).isEqualTo(venda.getPizzas());
        assertThat(vendaCadastroDTO.getBebidas()).isEqualTo(venda.getBebidas());
        assertThat(vendaCadastroDTO.getValorVenda()).isEqualTo(venda.getValorVenda());
        assertThat(vendaCadastroDTO.getRegistro()).isEqualTo(venda.getRegistro());
    }

    @Test
    void testConstructorWithFields() {
        // Verifique se os valores definidos no setUp estão corretos
        assertThat(vendaCadastroDTO.getId()).isEqualTo(1L);
        // Verifique os demais campos da mesma maneira
        assertThat(vendaCadastroDTO.getCliente()).isNotNull();
        assertThat(vendaCadastroDTO.getFuncionario()).isNotNull();
        assertThat(vendaCadastroDTO.getPizzas()).isNotNull();
        assertThat(vendaCadastroDTO.getBebidas()).isNotNull();
        assertThat(vendaCadastroDTO.getValorVenda()).isEqualTo(BigDecimal.valueOf(200.0));
        assertThat(vendaCadastroDTO.getRegistro()).isNotNull();
    }
}
