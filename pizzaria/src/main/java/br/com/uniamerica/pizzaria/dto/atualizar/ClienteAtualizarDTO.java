package br.com.uniamerica.pizzaria.dto.atualizar;

import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.entity.Endereco;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class ClienteAtualizarDTO {
    private Long id;
    private String nomeCliente;
    private String cpf;
    private boolean ativo;
    private List<Endereco> endereco = new ArrayList<>();
    private LocalDateTime atualizar;

    public ClienteAtualizarDTO(Cliente cliente){
        id = cliente.getId();
        nomeCliente = cliente.getNomeCliente();
        cpf = cliente.getCpf();
        ativo = cliente.isAtivo();
        endereco = cliente.getEndereco();
        atualizar = cliente.getAtualizar();
    }
    public ClienteAtualizarDTO(Long id, String nomeCliente, boolean ativo, String cpf, List<Endereco> endereco, LocalDateTime atualizar){
        this.id = id;
        this.nomeCliente = nomeCliente;
        this.cpf = cpf;
        this.ativo = ativo;
        this.endereco = endereco;
        this.atualizar = atualizar;
    }
}
