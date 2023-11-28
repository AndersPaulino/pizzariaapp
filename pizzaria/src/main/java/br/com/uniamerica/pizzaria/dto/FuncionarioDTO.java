package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Funcionario;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class FuncionarioDTO{
    private Long id;
    private boolean ativo;
    private String nomeFuncionario;
    private LocalDateTime registro;
    private LocalDateTime atualizar;

    public FuncionarioDTO(Funcionario funcionario){
        id = funcionario.getId();
        ativo = funcionario.isAtivo();
        nomeFuncionario = funcionario.getNomeFuncionario();
        registro = funcionario.getRegistro();
        atualizar = funcionario.getAtualizar();
    }
    public FuncionarioDTO(Long id, boolean ativo, String nomeFuncionario, LocalDateTime atualizar, LocalDateTime registro){
        this.id = id;
        this.ativo = ativo;
        this.nomeFuncionario = nomeFuncionario;
        this.registro = registro;
        this.atualizar = atualizar;
    }
}
