package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Bebida;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter @Setter
public class BebidaDTO {
    private Long id;
    private boolean ativo;
    private String nomeBebida;
    private LocalDateTime registro;
    private LocalDateTime atualizar;
    private BigDecimal valorBebida;

    public BebidaDTO(Bebida bebida){
        id = bebida.getId();
        ativo = bebida.isAtivo();
        nomeBebida = bebida.getNomeBebida();
        registro = bebida.getRegistro();
        atualizar = bebida.getAtualizar();
        valorBebida = bebida.getValorBebida();
    }
    public BebidaDTO(Long id, boolean ativo, String nomeBebida, LocalDateTime registro, LocalDateTime atualizar, BigDecimal valorBebida){
        this.id = id;
        this.ativo = ativo;
        this.nomeBebida = nomeBebida;
        this.registro = registro;
        this.atualizar = atualizar;
        this.valorBebida = valorBebida;
    }
}
