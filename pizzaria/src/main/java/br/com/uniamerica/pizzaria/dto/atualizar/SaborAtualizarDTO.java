package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Sabor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter @Setter
public class SaborAtualizarDTO {
    private Long id;
    private boolean ativo;
    private LocalDateTime atualizar;
    private String nomeSabor;

    public SaborAtualizarDTO(Sabor sabor){
        id = sabor.getId();
        ativo = sabor.isAtivo();
        atualizar = sabor.getAtualizar();
        nomeSabor = sabor.getNomeSabor();
    }
    public SaborAtualizarDTO(Long id, boolean ativo, LocalDateTime atualizar, String nomeSabor){
        this.id = id;
        this.ativo = ativo;
        this.nomeSabor = nomeSabor;
        this.atualizar = atualizar;
    }
}
