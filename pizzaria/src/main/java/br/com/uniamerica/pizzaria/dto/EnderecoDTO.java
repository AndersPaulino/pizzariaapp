package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Endereco;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class EnderecoDTO {
    private Long id;
    private boolean ativo;
    private LocalDateTime registro;
    private LocalDateTime atualizar;
    private String rua;
    private String bairro;
    private int numero;


    public EnderecoDTO(Endereco endereco){
        id = endereco.getId();
        ativo = endereco.isAtivo();
        registro = endereco.getRegistro();
        atualizar = endereco.getAtualizar();
        rua = endereco.getRua();
        bairro = endereco.getBairro();
        numero = endereco.getNumero();
    }

    public EnderecoDTO(Long id, boolean ativo, LocalDateTime registro, LocalDateTime atualizar, String rua, String bairro, int numero){
        this.id = id;
        this.ativo = ativo;
        this.registro = registro;
        this.atualizar = atualizar;
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
    }
}
