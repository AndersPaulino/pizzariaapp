package br.com.uniamerica.pizzaria.controller;

import br.com.uniamerica.pizzaria.dto.BebidaDTO;
import br.com.uniamerica.pizzaria.dto.EnderecoDTO;
import br.com.uniamerica.pizzaria.dto.FuncionarioDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.EnderecoAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.FuncionarioAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.EnderecoCadastroDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.FuncionarioCadastradoDTO;
import br.com.uniamerica.pizzaria.entity.Endereco;
import br.com.uniamerica.pizzaria.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/endereco")
@CrossOrigin(origins = "*")
public class EnderecoController {
    private EnderecoService enderecoService;
    @Autowired
    public EnderecoController(EnderecoService enderecoService){
        this.enderecoService = enderecoService;
    }
    @GetMapping("/bairro/{bairro}")
    public ResponseEntity<List<EnderecoDTO>> buscarEnderecosPorBairro(@PathVariable String bairro) {
        try{
            List<EnderecoDTO> enderecoDTO = enderecoService.buscarEnderecosPorBairro(bairro);

            if (enderecoDTO != null){
                return ResponseEntity.ok(enderecoDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/rua/{rua}")
    public ResponseEntity<List<EnderecoDTO>> buscarEnderecosPorRua(@PathVariable String rua) {
        try{
            List<EnderecoDTO> enderecoDTO = enderecoService.buscarEnderecosPorRua(rua);

            if (enderecoDTO != null){
                return ResponseEntity.ok(enderecoDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/numero/{numero}")
    public ResponseEntity<List<EnderecoDTO>> buscarEnderecosPorNumero(@PathVariable int numero) {
        try{
            List<EnderecoDTO> enderecoDTO = enderecoService.buscarEnderecosPorNumero(numero);

            if (enderecoDTO != null){
                return ResponseEntity.ok(enderecoDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @GetMapping("ativo/{ativo}")
    public ResponseEntity<List<EnderecoDTO>> findByAtivo(@PathVariable boolean ativo) {
        try {
            List<EnderecoDTO> enderecoDTOS = enderecoService.findByAtivo(ativo);

            if (!enderecoDTOS.isEmpty()) {
                return ResponseEntity.ok(enderecoDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("registro/dia/{registro}")
    public ResponseEntity<List<EnderecoCadastroDTO>> findByDiaRegistro(@PathVariable("registro") LocalDate registro) {
        try {
            List<EnderecoCadastroDTO> enderecoCadastroDTOS = enderecoService.findByDiaRegistro(registro);

            if (!enderecoCadastroDTOS.isEmpty()) {
                return ResponseEntity.ok(enderecoCadastroDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("atualizar/dia/{atualizar}")
    public ResponseEntity<List<EnderecoAtualizarDTO>> findByDiaAtualizar(@PathVariable("atualizar") LocalDate atualizar) {
        try {
            List<EnderecoAtualizarDTO> enderecoAtualizarDTOS = enderecoService.findByDiaAtualizar(atualizar);

            if (!enderecoAtualizarDTOS.isEmpty()) {
                return ResponseEntity.ok(enderecoAtualizarDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<EnderecoDTO>> findAll() {
        List<EnderecoDTO> enderecosDTOS = enderecoService.findAll();
        return ResponseEntity.ok(enderecosDTOS);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnderecoDTO> findById(@PathVariable Long id) {
        return enderecoService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<String> cadastrar(@RequestBody Endereco endereco){
        try {
            enderecoService.cadastrar(endereco);
            return ResponseEntity.ok().body("Registro cadastrado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<String> atualizarEndereco(@PathVariable Long id, @RequestBody Endereco endereco) {
        try {

            enderecoService.atualizar(id, endereco);
            return ResponseEntity.ok().body("Registro atualizado com sucesso!");
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarEndereco(@PathVariable Long id) {
        try {
            enderecoService.deleteEndereco(id);
            return ResponseEntity.ok("Registro excluido com sucesso!");
        } catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }
}
