package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class VendaDTO {

    private Long id;
    private List<Cliente> cliente;
    private List<Funcionario> funcionario;
    private List<Pizza> pizzas = new ArrayList<>();
    private List<Bebida> bebidas = new ArrayList<>();
    private LocalDateTime registro;
    private BigDecimal valorVenda;

    public VendaDTO(Long id, List<Cliente> cliente, List<Funcionario> funcionario, List<Pizza> pizzas, List<Bebida> bebidas, LocalDateTime registro, BigDecimal valorVenda) {
        this.id = id;
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.pizzas = pizzas;
        this.bebidas = bebidas;
        this.registro = registro;
        this.valorVenda = valorVenda;
    }

    public VendaDTO(Venda venda) {
        id = venda.getId();
        cliente = venda.getCliente();
        funcionario = venda.getFuncionario();
        pizzas = venda.getPizzas();
        bebidas = venda.getBebidas();
        registro = venda.getRegistro();
        valorVenda = venda.getValorVenda();
    }
}
