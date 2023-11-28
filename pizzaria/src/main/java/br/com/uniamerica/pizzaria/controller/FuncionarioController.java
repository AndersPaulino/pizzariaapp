package br.com.uniamerica.pizzaria.controller;

import br.com.uniamerica.pizzaria.dto.FuncionarioDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.FuncionarioAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.FuncionarioCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Funcionario;
import br.com.uniamerica.pizzaria.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/funcionario")
@CrossOrigin(origins = "*")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping
    public ResponseEntity<List<FuncionarioDTO>> findAll() {
        List<FuncionarioDTO> funcionariosDTO = funcionarioService.findAll();
        return ResponseEntity.ok(funcionariosDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioDTO> findById(@PathVariable Long id) {
        return funcionarioService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<FuncionarioDTO> findByName(@RequestParam String nomeFuncionario) {
        try {
            FuncionarioDTO funcionarioDTO = funcionarioService.findByName(nomeFuncionario);

            if (funcionarioDTO != null) {
                return ResponseEntity.ok(funcionarioDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("ativo/{ativo}")
    public ResponseEntity<List<FuncionarioDTO>> findByAtivo(@PathVariable boolean ativo) {
        try {
            List<FuncionarioDTO> funcionarioDTOS = funcionarioService.findByAtivo(ativo);

            if (!funcionarioDTOS.isEmpty()) {
                return ResponseEntity.ok(funcionarioDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("registro/dia/{registro}")
    public ResponseEntity<List<FuncionarioCadastroDTO>> findByDiaRegistro(@PathVariable("registro") LocalDate registro) {
        try {
            List<FuncionarioCadastroDTO> funcionarioDTOS = funcionarioService.findByDiaRegistro(registro);

            if (!funcionarioDTOS.isEmpty()) {
                return ResponseEntity.ok(funcionarioDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("atualizar/dia/{atualizar}")
    public ResponseEntity<List<FuncionarioAtualizarDTO>> findByDiaAtualizar(@PathVariable("atualizar") LocalDate atualizar) {
        try {
            List<FuncionarioAtualizarDTO> funcionarioDTOS = funcionarioService.findByDiaAtualizar(atualizar);

            if (!funcionarioDTOS.isEmpty()) {
                return ResponseEntity.ok(funcionarioDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<String> cadastrarFuncionario(@RequestBody Funcionario funcionario) {
        try {
            funcionarioService.cadastrar(funcionario);
            return ResponseEntity.ok().body("Registro cadastrado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizarFuncionario(@PathVariable Long id, @RequestBody Funcionario funcionario) {
        try {
            funcionarioService.atualizarFuncionario(id, funcionario);
            return ResponseEntity.ok().body("Registro atualizado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarFuncionario(@PathVariable Long id) {
        try {
            funcionarioService.deletarFuncionario(id);
            return ResponseEntity.ok("Registro excluído com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("erro")
    public ResponseEntity<List<FuncionarioDTO>> exemploErro() {
        List<FuncionarioDTO> listaVazia = Collections.emptyList(); // Utilizando uma lista vazia

        return ResponseEntity.badRequest().body(listaVazia);
    }

}
