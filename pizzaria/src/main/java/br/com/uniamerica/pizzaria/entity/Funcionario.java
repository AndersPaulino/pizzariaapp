package br.com.uniamerica.pizzaria.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "tb_funcionario", schema = "public")
public class Funcionario extends AbsctractEntity{
    @Getter
    @Setter
    @Column(name = "cl_nome_funcionario", nullable = false, length = 255)
    private String nomeFuncionario;
}
