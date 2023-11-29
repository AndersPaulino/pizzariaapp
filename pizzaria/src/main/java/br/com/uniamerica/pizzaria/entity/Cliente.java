package br.com.uniamerica.pizzaria.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_cliente", schema = "public")
public class Cliente extends AbsctractEntity{
    @Getter
    @Setter
    @Column(name = "cl_nome_cliente", nullable = false, length = 255)
    private String nomeCliente;

    @Getter @Setter
    @Column(name = "cl_cpf", nullable = false, length = 18)
    private String cpf;

    @Getter @Setter
    @ManyToMany
    @JoinTable(name = "cliente_endereco",
            joinColumns = @JoinColumn(name = "cliente_id"),
            inverseJoinColumns = @JoinColumn(name = "endereco_id"))
    private List<Endereco> endereco = new ArrayList<>();
}
