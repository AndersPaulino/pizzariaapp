package br.com.uniamerica.pizzaria.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_pizza", schema = "public")
public class Pizza extends AbsctractEntity{
    @Getter
    @Setter
    @ManyToMany
    @JoinTable(name = "cl_pizza.sabor",
            joinColumns =  @JoinColumn(
                    name = "pizza.id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "sabor.id"
            )
    )
    private List<Sabor> sabor = new ArrayList<>();

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "cl_tamanho")
    private Tamanho tamanho;

    @Getter @Setter
    @Column(name = "cl_qtde_sabor")
    private int qtdeSabor;

    @Getter @Setter
    @Column(name = "cl_valor_pizza")
    private BigDecimal valorPizza;

}
