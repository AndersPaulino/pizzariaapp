package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.entity.Endereco;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
public class ClienteDTO {
    private Long id;
    private boolean ativo;
    private String nomeCliente;
    private LocalDateTime registro;
    private LocalDateTime atualizar;
    private List<Endereco> enderecos;
    private String cpf;

    public ClienteDTO(Cliente cliente){
        id = cliente.getId();
        ativo = cliente.isAtivo();
        nomeCliente = cliente.getNomeCliente();
        registro = cliente.getRegistro();
        atualizar = cliente.getAtualizar();
        cpf = cliente.getCpf();
        enderecos = cliente.getEndereco();
    }
    public ClienteDTO(Long id, boolean ativo, String nomeCliente, LocalDateTime registro, LocalDateTime atualizar, List<Endereco> enderecos, String cpf){
        this.id = id;
        this.ativo = ativo;
        this.nomeCliente = nomeCliente;
        this.registro = registro;
        this.atualizar = atualizar;
        this.cpf = cpf;
        this.enderecos = enderecos;
    }
}
