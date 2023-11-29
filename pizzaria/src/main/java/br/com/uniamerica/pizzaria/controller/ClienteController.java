package br.com.uniamerica.pizzaria.controller;

import br.com.uniamerica.pizzaria.dto.ClienteDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.ClienteAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.ClienteCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.entity.Endereco;
import br.com.uniamerica.pizzaria.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cliente")
@CrossOrigin(origins = "*")
public class ClienteController {
    private ClienteService clienteService;

    @Autowired
    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> findById(@PathVariable Long id) {
        Optional<ClienteDTO> clienteDTO = clienteService.findById(id);
        return clienteDTO.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<ClienteDTO>> findAll() {
        List<ClienteDTO> clienteDTOS = clienteService.findAll();
        return ResponseEntity.ok(clienteDTOS);
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<ClienteDTO> findByName(@PathVariable String nomeCliente) {
        try {
            ClienteDTO clienteDTO = clienteService.findByName(nomeCliente);

            if (clienteDTO != null) {
                return ResponseEntity.ok(clienteDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("ativo/{ativo}")
    public ResponseEntity<List<ClienteDTO>> findByAtivo(@PathVariable boolean ativo) {
        try {
            List<ClienteDTO> clienteDTOS = clienteService.findByAtivo(ativo);

            if (!clienteDTOS.isEmpty()) {
                return ResponseEntity.ok(clienteDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("registro/dia/{registro}")
    public ResponseEntity<List<ClienteCadastroDTO>> findByDiaRegistro(@PathVariable("registro") LocalDate registro) {
        try {
            List<ClienteCadastroDTO> clienteDTOS = clienteService.findByDiaRegistro(registro);

            if (!clienteDTOS.isEmpty()) {
                return ResponseEntity.ok(clienteDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("atualizar/dia/{atualizar}")
    public ResponseEntity<List<ClienteAtualizarDTO>> findByDiaAtualizar(@PathVariable("atualizar") LocalDate atualizar) {
        try {
            List<ClienteAtualizarDTO> clienteDTOS = clienteService.findByDiaAtualizar(atualizar);

            if (!clienteDTOS.isEmpty()) {
                return ResponseEntity.ok(clienteDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/cpf/{cpf}")
    public ResponseEntity<ClienteDTO> findByCpf(@PathVariable String cpf) {
        try {
            ClienteDTO clienteDTO = clienteService.findByCpf(cpf);

            if (clienteDTO != null) {
                return ResponseEntity.ok(clienteDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<String> cadastrarCliente(@RequestBody Cliente cliente) {
        try {
            // Verifique se o cliente é nulo
            if (cliente == null) {
                return ResponseEntity.badRequest().body("O objeto cliente está ausente ou vazio.");
            }

            // Verifique se o nome do cliente é fornecido
            if (cliente.getNomeCliente() == null || cliente.getNomeCliente().isEmpty()) {
                return ResponseEntity.badRequest().body("O nome do cliente não pode estar vazio.");
            }

            // Verifique se a lista de endereços está presente e não vazia
            List<Endereco> enderecos = cliente.getEndereco();
            if (enderecos == null || enderecos.isEmpty()) {
                return ResponseEntity.badRequest().body("O cliente deve ter pelo menos um endereço.");
            }
            clienteService.cadastrar(cliente);
            return ResponseEntity.ok().body("Registro cadastrado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizarCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        try {
            clienteService.atualizar(id, cliente);
            return ResponseEntity.ok().body("Registro atualizado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarCliente(@PathVariable Long id) {
        try {
            clienteService.deleteClient(id);
            return ResponseEntity.ok("Registro excluído com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/desativar/{id}")
    public ResponseEntity<String> desativarCliente(@PathVariable Long id) {
        try {
            clienteService.desativar(id);
            return ResponseEntity.ok().body("Registro desativado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao desativar o registro.");
        }
    }
}
