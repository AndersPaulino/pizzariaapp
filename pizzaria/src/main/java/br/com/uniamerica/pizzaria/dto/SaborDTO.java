package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Sabor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class SaborDTO {
    private Long id;
    private boolean ativo;
    private LocalDateTime registro;
    private LocalDateTime atualizar;
    private String nomeSabor;

    public SaborDTO(Sabor sabor){
        id = sabor.getId();
        ativo = sabor.isAtivo();
        registro = sabor.getRegistro();
        atualizar = sabor.getAtualizar();
        nomeSabor = sabor.getNomeSabor();
    }

    public SaborDTO(Long id, boolean ativo, String nomeSabor, LocalDateTime registro, LocalDateTime atualizar) {
        this.id = id;
        this.ativo = ativo;
        this.nomeSabor = nomeSabor;
        this.registro = registro;
        this.atualizar = atualizar;
    }
}
