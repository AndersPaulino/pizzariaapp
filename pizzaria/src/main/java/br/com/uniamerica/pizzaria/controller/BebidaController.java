package br.com.uniamerica.pizzaria.controller;

import br.com.uniamerica.pizzaria.dto.BebidaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.BebidaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.BebidaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Bebida;
import br.com.uniamerica.pizzaria.service.BebidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/bebida")
@CrossOrigin(origins = "*")
public class BebidaController {
    private final BebidaService bebidaService;
    @Autowired
    public BebidaController(BebidaService bebidaService) {
        this.bebidaService = bebidaService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<BebidaDTO> findById(@PathVariable Long id) {
        return bebidaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<BebidaDTO>> findAll() {
        List<BebidaDTO> bebidaDTOS = bebidaService.findAll();
        return ResponseEntity.ok(bebidaDTOS);
    }

    @GetMapping("/nome/{nomeBebida}")
    public ResponseEntity<BebidaDTO> findByName(@PathVariable String nomeBebida) {
        try{
            BebidaDTO bebidaDTO = bebidaService.findByName(nomeBebida);

            if (bebidaDTO != null){
                return ResponseEntity.ok(bebidaDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("ativo/{ativo}")
    public ResponseEntity<List<BebidaDTO>> findByAtivo(@PathVariable boolean ativo) {
        try {
            List<BebidaDTO> bebidaDTOS = bebidaService.findByAtivo(ativo);

            if (!bebidaDTOS.isEmpty()) {
                return ResponseEntity.ok(bebidaDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("registro/dia/{registro}")
    public ResponseEntity<List<BebidaCadastroDTO>> findByDiaRegistro(@PathVariable("registro") LocalDate registro) {
        try {
            List<BebidaCadastroDTO> bebidaDTOS = bebidaService.findByDiaRegistro(registro);

            if (!bebidaDTOS.isEmpty()) {
                return ResponseEntity.ok(bebidaDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("atualizar/dia/{atualizar}")
    public ResponseEntity<List<BebidaAtualizarDTO>> findByDiaAtualizar(@PathVariable("atualizar") LocalDate atualizar) {
        try {
            List<BebidaAtualizarDTO> bebidaDTOS = bebidaService.findByDiaAtualizar(atualizar);

            if (!bebidaDTOS.isEmpty()) {
                return ResponseEntity.ok(bebidaDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<String> cadastrarBebida(@RequestBody Bebida bebida) {
        try {
            bebidaService.cadastrar(bebida);
            return ResponseEntity.ok().body("Registro cadastrado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<String> atualizarBebida(@PathVariable Long id, @RequestBody Bebida bebida) {
        try {
            bebidaService.atualizar(id, bebida);
            return ResponseEntity.ok().body("Registro atualizado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarBebida(@PathVariable Long id) {
        try {
            bebidaService.deleteBebida(id);
            return ResponseEntity.ok("Registro excluído com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/desativar/{id}")
    public ResponseEntity<String> deletar(@PathVariable Long id) {
        try {
            bebidaService.desativar(id);
            return ResponseEntity.ok().body("Registro desativado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao desativar o registro.");
        }
    }

    @GetMapping("erro")
    public ResponseEntity<List<BebidaDTO>> exemploErro() {
        // Aqui você deve criar um objeto de lista vazia ou com dados para retornar
        List<BebidaDTO> listaVazia = new ArrayList<>(); // Ou outra forma de criar a lista desejada

        return ResponseEntity.badRequest().body(listaVazia);
    }


}
