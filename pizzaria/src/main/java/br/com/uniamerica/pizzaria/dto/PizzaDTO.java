package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Pizza;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.entity.Tamanho;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class PizzaDTO {
    private Long id;

    private boolean ativo;

    private LocalDateTime registro;

    private List<Sabor> sabor = new ArrayList<>();

    private Tamanho tamanho;

    private BigDecimal valorPizza;

    private int qtdeSabor;

    public PizzaDTO(Pizza pizza){
        id = pizza.getId();
        ativo = pizza.isAtivo();
        registro = pizza.getRegistro();
        sabor = pizza.getSabor();
        tamanho = pizza.getTamanho();
        valorPizza = pizza.getValorPizza();
        qtdeSabor = pizza.getQtdeSabor();
    }

    public PizzaDTO(Long id, boolean ativo, LocalDateTime registro, List<Sabor> sabor, Tamanho tamanho, BigDecimal valorPizza, int qtdeSabor){
        this.id = id;
        this.ativo = ativo;
        this.registro = registro;
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.valorPizza = valorPizza;
        this.qtdeSabor = qtdeSabor;
    }
}
