package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Endereco;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class EnderecoCadastroDTO {
    private Long id;
    private String bairro;
    private String rua;
    private int numero;
    private boolean ativo;
    private LocalDateTime registro;

    public EnderecoCadastroDTO(Endereco endereco){
        id = endereco.getId();
        ativo = endereco.isAtivo();
        bairro = endereco.getBairro();
        rua = endereco.getRua();
        numero = endereco.getNumero();
        registro = endereco.getRegistro();
    }
    public EnderecoCadastroDTO(Long id, boolean ativo, String bairro, String rua, int numero, LocalDateTime registro){
        this.id = id;
        this.ativo = ativo;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.registro = registro;
    }
}
