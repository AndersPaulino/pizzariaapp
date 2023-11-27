package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Funcionario;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class FuncionarioCadastradoDTO {
    private Long id;
    private String nomeFuncionario;
    private boolean ativo;
    private LocalDateTime registro;

    public FuncionarioCadastradoDTO(Funcionario funcionario){
        id = funcionario.getId();
        nomeFuncionario = funcionario.getNomeFuncionario();
        ativo = funcionario.isAtivo();
        registro = funcionario.getRegistro();
    }

    public FuncionarioCadastradoDTO(Long id, String nomeFuncionario, boolean ativo, LocalDateTime registro){
        this.id = id;
        this.nomeFuncionario = nomeFuncionario;
        this.ativo = ativo;
        this.registro = registro;
    }
}
