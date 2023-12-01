package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Sabor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class SaborCadastroDTO {
    private Long id;
    private boolean ativo;
    private LocalDateTime registro;
    private String nomeSabor;

    public SaborCadastroDTO(Sabor sabor){
        id = sabor.getId();
        ativo = sabor.isAtivo();
        registro = sabor.getRegistro();
        nomeSabor = sabor.getNomeSabor();
    }
    public SaborCadastroDTO(Long id, boolean ativo, LocalDateTime registro, String nomeSabor){
        this.id = id;
        this.ativo = ativo;
        this.nomeSabor = nomeSabor;
        this.registro = registro;
    }
}
