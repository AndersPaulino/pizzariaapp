package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Bebida;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter @Setter
public class BebidaCadastroDTO {
    private Long id;
    private String nomeBebida;
    private BigDecimal valorBebida;
    private boolean ativo;
    private LocalDateTime registro;

    public BebidaCadastroDTO(Long id, String nomeBebida, BigDecimal valorBebida, boolean ativo, LocalDateTime registro){
        this.id = id;
        this.nomeBebida = nomeBebida;
        this.valorBebida = valorBebida;
        this.ativo = ativo;
        this.registro = registro;
    }

    public BebidaCadastroDTO(Bebida bebida){
        id = bebida.getId();
        nomeBebida = bebida.getNomeBebida();
        valorBebida = bebida.getValorBebida();
        ativo = bebida.isAtivo();
        registro = bebida.getRegistro();
    }
}
