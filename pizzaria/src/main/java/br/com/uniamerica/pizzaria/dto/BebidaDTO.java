package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Bebida;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class BebidaDTO {
    private Long id;
    private boolean ativo;
    private String nomeBebida;
    private LocalDateTime registro;
    private LocalDateTime atualizar;

    public BebidaDTO(Bebida bebida){
        id = bebida.getId();
        ativo = bebida.isAtivo();
        nomeBebida = bebida.getNomeBebida();
        registro = bebida.getRegistro();
        atualizar = bebida.getAtualizar();
    }
    public BebidaDTO(Long id, boolean ativo, String nomeBebida, LocalDateTime registro, LocalDateTime atualizar){
        this.id = id;
        this.ativo = ativo;
        this.nomeBebida = nomeBebida;
        this.registro = registro;
        this.atualizar = atualizar;
    }
}
