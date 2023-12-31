package br.com.uniamerica.pizzaria.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "tb_venda", schema = "public")
public class Venda extends AbsctractEntity{

    @Getter
    @Setter
    @OneToMany
    @JoinColumn(name = "cliente_id")
    private List<Cliente> cliente;

    @Getter @Setter
    @OneToMany
    @JoinColumn(name = "funcionario_id")
    private List<Funcionario> funcionario = new ArrayList<>();

    @Getter @Setter
    @ManyToMany
    @JoinTable(name = "venda_pizza",
            joinColumns = @JoinColumn(name = "venda_id"),
            inverseJoinColumns = @JoinColumn(name = "pizza_id"))
    private List<Pizza> pizzas = new ArrayList<>();

    @Getter @Setter
    @ManyToMany
    @JoinTable(name = "venda_bebida",
            joinColumns = @JoinColumn(name = "venda_id"),
            inverseJoinColumns = @JoinColumn(name = "bebida_id"))
    private List<Bebida> bebidas = new ArrayList<>();

    @Getter @Setter
    @Column(name = "emitir_nota")
    private boolean emitirNota;

    @Getter @Setter
    @Column(name = "entregar")
    private boolean entregar;

    @Getter @Setter
    @Column(name = "valor_venda")
    private BigDecimal valorVenda;

}
