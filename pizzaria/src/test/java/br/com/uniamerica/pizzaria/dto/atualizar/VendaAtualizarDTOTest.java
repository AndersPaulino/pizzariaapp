package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class VendaAtualizarDTOTest {
    private Venda venda;
    private VendaAtualizarDTO vendaDTO;
    @Test
    void testConstructorWithEntity() {
        // Criando instâncias fictícias de Cliente, Funcionario, Pizza e Bebida para utilizar nos testes
        Cliente cliente = new Cliente();
        Funcionario funcionario = new Funcionario();
        List<Pizza> pizzas = new ArrayList<>();
        List<Bebida> bebidas = new ArrayList<>();
        BigDecimal valorVenda = BigDecimal.valueOf(100.0);
        LocalDateTime atualizar = LocalDateTime.now();

        // Criando uma venda fictícia para utilizar nos testes
        venda = new Venda();
        venda.setCliente(cliente);
        venda.setFuncionario(funcionario);
        venda.setPizzas(pizzas);
        venda.setBebidas(bebidas);
        venda.setValorVenda(valorVenda);
        venda.setAtualizar(atualizar);

        // Criando um objeto VendaAtualizarDTO utilizando o construtor com uma entidade Venda
        vendaDTO = new VendaAtualizarDTO(venda);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(vendaDTO.getId()).isEqualTo(venda.getId());
        assertThat(vendaDTO.getCliente()).isEqualTo(venda.getCliente());
        assertThat(vendaDTO.getFuncionario()).isEqualTo(venda.getFuncionario());
        assertThat(vendaDTO.getPizzas()).isEqualTo(venda.getPizzas());
        assertThat(vendaDTO.getBebidas()).isEqualTo(venda.getBebidas());
        assertThat(vendaDTO.getValorVenda()).isEqualTo(venda.getValorVenda());
        assertThat(vendaDTO.getAtualizar()).isEqualTo(venda.getAtualizar());
    }

    @Test
    void testConstructorWithFields() {
        // Dados de exemplo para serem utilizados no teste
        Long id = 2L;
        Cliente cliente = new Cliente();
        Funcionario funcionario = new Funcionario();
        List<Pizza> pizzas = new ArrayList<>();
        List<Bebida> bebidas = new ArrayList<>();
        BigDecimal valorVenda = BigDecimal.valueOf(150.0);
        LocalDateTime atualizar = LocalDateTime.now();

        // Criando um objeto VendaAtualizarDTO utilizando o construtor com parâmetros
        vendaDTO = new VendaAtualizarDTO(id, cliente, funcionario, pizzas, bebidas, valorVenda, atualizar);

        // Verificando se os valores foram atribuídos corretamente
        assertThat(vendaDTO.getId()).isEqualTo(id);
        assertThat(vendaDTO.getCliente()).isEqualTo(cliente);
        assertThat(vendaDTO.getFuncionario()).isEqualTo(funcionario);
        assertThat(vendaDTO.getPizzas()).isEqualTo(pizzas);
        assertThat(vendaDTO.getBebidas()).isEqualTo(bebidas);
        assertThat(vendaDTO.getValorVenda()).isEqualTo(valorVenda);
        assertThat(vendaDTO.getAtualizar()).isEqualTo(atualizar);
    }
}
