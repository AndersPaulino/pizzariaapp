package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Bebida;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter @Setter
public class BebidaAtualizarDTO {
    private Long id;
    private String nomeBebida;
    private BigDecimal valorBebida;
    private boolean ativo;
    private LocalDateTime atualizar;

    public BebidaAtualizarDTO(Long id, String nomeBebida, BigDecimal valorBebida, boolean ativo, LocalDateTime atualizar){
        this.id = id;
        this.nomeBebida = nomeBebida;
        this.valorBebida = valorBebida;
        this.ativo = ativo;
        this.atualizar = atualizar;
    }

    public BebidaAtualizarDTO(Bebida bebida){
        id = bebida.getId();
        nomeBebida = bebida.getNomeBebida();
        valorBebida = bebida.getValorBebida();
        ativo = bebida.isAtivo();
        atualizar = bebida.getAtualizar();
    }
}
