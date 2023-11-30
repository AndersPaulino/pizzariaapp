package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class VendaAtualizarDTO {
    private Long id;
    private List<Cliente> cliente;
    private List<Funcionario> funcionario;
    private List<Pizza> pizzas = new ArrayList<>();
    private List<Bebida> bebidas = new ArrayList<>();
    private BigDecimal valorVenda;
    private LocalDateTime atualizar;

    public VendaAtualizarDTO(Venda venda){
        id = venda.getId();
        cliente = venda.getCliente();
        funcionario = venda.getFuncionario();
        pizzas = venda.getPizzas();
        bebidas = venda.getBebidas();
        valorVenda = venda.getValorVenda();
        atualizar = venda.getAtualizar();
    }
    public VendaAtualizarDTO(Long id, List<Cliente> cliente, List<Funcionario> funcionario, List<Pizza> pizzas, List<Bebida> bebidas, BigDecimal valorVenda, LocalDateTime atualizar){
        this.id = id;
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.pizzas = pizzas;
        this.bebidas = bebidas;
        this.valorVenda = valorVenda;
        this.atualizar = atualizar;
    }
}
