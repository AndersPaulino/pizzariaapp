package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Endereco;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class EnderecoAtualizarDTO {
    private Long id;
    private String bairro;
    private String rua;
    private int numero;
    private boolean ativo;
    private LocalDateTime atualizar;

    public EnderecoAtualizarDTO(Endereco endereco){
        id = endereco.getId();
        bairro = endereco.getBairro();
        rua = endereco.getRua();
        numero = endereco.getNumero();
        atualizar = endereco.getAtualizar();
    }
    public EnderecoAtualizarDTO(Long id, String bairro, String rua, int numero, LocalDateTime atualizar){
        this.id = id;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.atualizar = atualizar;
    }
}
