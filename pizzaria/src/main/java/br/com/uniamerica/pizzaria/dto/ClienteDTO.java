package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Cliente;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class ClienteDTO {
    private Long id;
    private boolean ativo;
    private String nomeCliente;
    private LocalDateTime registro;
    private LocalDateTime atualizar;

    public ClienteDTO(Cliente cliente){
        id = cliente.getId();
        ativo = cliente.isAtivo();
        nomeCliente = cliente.getNomeCliente();
        registro = cliente.getRegistro();
        atualizar = cliente.getAtualizar();
    }
    public ClienteDTO(Long id, boolean ativo, String nomeCliente, LocalDateTime registro, LocalDateTime atualizar){
        this.id = id;
        this.ativo = ativo;
        this.nomeCliente = nomeCliente;
        this.registro = registro;
        this.atualizar = atualizar;
    }
}
