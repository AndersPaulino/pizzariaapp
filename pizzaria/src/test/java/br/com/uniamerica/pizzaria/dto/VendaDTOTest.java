package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

@ExtendWith(MockitoExtension.class)
class VendaDTOTest {
    private Venda venda;
    private VendaDTO vendaDTO;

    @Test
    void testeConstructorWithVenda(){
        venda = new Venda();
        vendaDTO = new VendaDTO(venda);

        assertEquals(venda.getId(), vendaDTO.getId());
        assertEquals(venda.getValorVenda(), vendaDTO.getValorVenda());
        assertEquals(venda.getBebidas(), vendaDTO.getBebidas());
        assertEquals(venda.getPizzas(), vendaDTO.getPizzas());
        assertEquals(venda.getCliente(), vendaDTO.getCliente());
        assertEquals(venda.getFuncionario(), vendaDTO.getFuncionario());
    }

    @Test
    void testConstructorWithIndividualsParameteres() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 1L;
        List<Cliente> cliente = new ArrayList<>(); // Mock do Cliente (ou crie um objeto Cliente)
        List<Funcionario> funcionario = new ArrayList<>(); // Mock do Funcionario (ou crie um objeto Funcionario)
        List<Pizza> pizzas = new ArrayList<>(); // Preencha com pizzas desejadas
        List<Bebida> bebidas = new ArrayList<>(); // Preencha com bebidas desejadas
        LocalDateTime registro = LocalDateTime.now();
        BigDecimal valorVenda = BigDecimal.valueOf(50.0);

        // Criando um objeto VendaDTO utilizando o construtor
        vendaDTO = new VendaDTO(id, cliente, funcionario, pizzas, bebidas, registro, valorVenda);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(vendaDTO.getId()).isEqualTo(id);
        assertThat(vendaDTO.getCliente()).isEqualTo(cliente);
        assertThat(vendaDTO.getFuncionario()).isEqualTo(funcionario);
        assertThat(vendaDTO.getPizzas()).isEqualTo(pizzas);
        assertThat(vendaDTO.getBebidas()).isEqualTo(bebidas);
        assertThat(vendaDTO.getRegistro()).isEqualTo(registro);
        assertThat(vendaDTO.getValorVenda()).isEqualByComparingTo(valorVenda);
    }
}
