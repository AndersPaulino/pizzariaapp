package br.com.uniamerica.pizzaria.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_sabor", schema = "public")
public class Sabor extends AbsctractEntity{
    @Getter
    @Setter
    @Column(name = "cl_nome_sabor",length = 255)
    private String nomeSabor;
}
