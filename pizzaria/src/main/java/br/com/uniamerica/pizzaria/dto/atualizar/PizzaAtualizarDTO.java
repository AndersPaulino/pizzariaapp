package br.com.uniamerica.pizzaria.dto.atualizar;

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
public class PizzaAtualizarDTO {
    private Long id;
    private boolean ativo;
    private LocalDateTime atualizar;
    private List<Sabor> sabor = new ArrayList<>();
    private Tamanho tamanho;
    private BigDecimal valorPizza;
    private int qtdeSabor;

    public PizzaAtualizarDTO(Pizza pizza){
        id = pizza.getId();
        ativo = pizza.isAtivo();
        atualizar = pizza.getRegistro();
        sabor = pizza.getSabor();
        tamanho = pizza.getTamanho();
        valorPizza = pizza.getValorPizza();
        qtdeSabor = pizza.getQtdeSabor();
    }
    public PizzaAtualizarDTO(Long id, boolean ativo, LocalDateTime atualizar, List<Sabor> sabor, Tamanho tamanho, BigDecimal valorPizza, int qtdeSabor){
        this.id = id;
        this.ativo = ativo;
        this.atualizar = atualizar;
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.valorPizza = valorPizza;
        this.qtdeSabor = qtdeSabor;
    }
}
