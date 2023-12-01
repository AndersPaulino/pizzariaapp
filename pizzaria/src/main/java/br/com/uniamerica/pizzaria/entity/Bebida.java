package br.com.uniamerica.pizzaria.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "tb_bebida", schema = "public")
public class Bebida extends AbsctractEntity{
    @Getter
    @Setter
    @Column(name = "cl_nome_bebida", length = 255)
    private String nomeBebida;

    @Getter @Setter
    @Column(name = "cl_valor_bebida")
    private BigDecimal valorBebida;
}
