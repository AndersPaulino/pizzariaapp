package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class VendaCadastroDTO {
    private Long id;
    private Cliente cliente;
    private Funcionario funcionario;
    private List<Pizza> pizzas = new ArrayList<>();
    private List<Bebida> bebidas = new ArrayList<>();
    private BigDecimal valorVenda;
    private LocalDateTime registro;

    public VendaCadastroDTO(Venda venda){
        id = venda.getId();
        cliente = venda.getCliente();
        funcionario = venda.getFuncionario();
        pizzas = venda.getPizzas();
        bebidas = venda.getBebidas();
        valorVenda = venda.getValorVenda();
        registro = venda.getRegistro();
    }
    public VendaCadastroDTO(Long id, Cliente cliente, Funcionario funcionario, List<Pizza> pizzas, List<Bebida> bebidas, BigDecimal valorVenda, LocalDateTime registro){
        this.id = id;
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.pizzas = pizzas;
        this.bebidas = bebidas;
        this.valorVenda = valorVenda;
        this.registro = registro;
    }
}
