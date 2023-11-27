package br.com.uniamerica.pizzaria.dto.cadastro;

import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.entity.Endereco;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@Getter @Setter
public class ClienteCadastroDTO {
    private Long id;
    private String nomeCliente;
    private String cpf;
    private boolean ativo;
    private List<Endereco> endereco = new ArrayList<>();
    private LocalDateTime registro;

    public ClienteCadastroDTO(Cliente cliente){
        id = cliente.getId();
        nomeCliente = cliente.getNomeCliente();
        cpf = cliente.getCpf();
        ativo = cliente.isAtivo();
        endereco = cliente.getEndereco();
        registro = cliente.getRegistro();
    }
    public ClienteCadastroDTO(Long id, String nomeCliente, boolean ativo, String cpf, List<Endereco> endereco, LocalDateTime registro){
        this.id = id;
        this.nomeCliente = nomeCliente;
        this.cpf = cpf;
        this.ativo = ativo;
        this.endereco = endereco;
        this.registro = registro;
    }
}
