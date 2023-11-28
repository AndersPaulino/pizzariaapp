package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Funcionario;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter @Setter
public class FuncionarioAtualizarDTO {
    private Long id;
    private String nomeFuncionario;
    private boolean ativo;
    private LocalDateTime atualizar;

    public FuncionarioAtualizarDTO(Funcionario funcionario){
        id = funcionario.getId();
        nomeFuncionario = funcionario.getNomeFuncionario();
        ativo = funcionario.isAtivo();
        atualizar = funcionario.getAtualizar();
    }

    public FuncionarioAtualizarDTO(Long id, String nomeFuncionario, boolean ativo, LocalDateTime atualizar){
        this.id = id;
        this.nomeFuncionario = nomeFuncionario;
        this.ativo = ativo;
        this.atualizar = atualizar;
    }
}
