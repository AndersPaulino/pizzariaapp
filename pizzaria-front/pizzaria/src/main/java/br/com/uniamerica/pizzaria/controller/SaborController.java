package br.com.uniamerica.pizzaria.controller;

import br.com.uniamerica.pizzaria.dto.SaborDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.SaborAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.SaborCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.service.SaborService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/sabor")
@CrossOrigin(origins = "http://localhost:4200")
public class SaborController {

    private final SaborService saborService;

    @Autowired
    public SaborController(SaborService saborService) {
        this.saborService = saborService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<SaborDTO> findById(@PathVariable Long id) {
        return saborService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<SaborDTO>> findAll() {
        List<SaborDTO> saborDTOS = saborService.findAll();
        return ResponseEntity.ok(saborDTOS);
    }
    @GetMapping("/nome/{nomeSabor}")
    public ResponseEntity<SaborDTO> findBYName(@PathVariable String nomeSabor){
        try {
            SaborDTO saborDTO = saborService.findByName(nomeSabor);
            if (saborDTO != null){
                return ResponseEntity.ok(saborDTO);
            }else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/ativo/{ativo}")
    public ResponseEntity<List<SaborDTO>> findByAtivo(@PathVariable boolean ativo){
        try {
            List<SaborDTO> saborDTO = saborService.findByAtivo(ativo);
            if (saborDTO != null){
                return ResponseEntity.ok(saborDTO);
            }else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/registro/dia/{registro}")
    public ResponseEntity<List<SaborCadastroDTO>> findByDiaRegistro(@PathVariable LocalDate registro){
        try {
            List<SaborCadastroDTO> saborDTO = saborService.findByDiaRegistro(registro);
            if (saborDTO != null){
                return ResponseEntity.ok(saborDTO);
            }else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/atualizar/dia/{atualziar}")
    public ResponseEntity<List<SaborAtualizarDTO>> findByDiaAtualizar(@PathVariable LocalDate atualizar){
        try {
            List<SaborAtualizarDTO> saborDTO = saborService.findByDiaAtualizar(atualizar);
            if (saborDTO != null){
                return ResponseEntity.ok(saborDTO);
            }else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<String> cadastrar(@RequestBody Sabor sabor) {
        try {
            saborService.cadastrar(sabor);
            return ResponseEntity.ok().body("Registro Cadastrado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable Long id, @RequestBody Sabor sabor) {
        try {
            saborService.atualizar(id, sabor);
            return ResponseEntity.ok().body("Registro atualizado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarSabor(@PathVariable Long id) {
        try {
            saborService.deletaSabor(id);
            return ResponseEntity.ok("Registro excluído com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/desativar/{id}")
    public ResponseEntity<String> desativar(@PathVariable Long id){
        try {
            saborService.desativar(id);
            return ResponseEntity.ok().body("Registro desativado com sucesso!");
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao desativar o registro!");
        }
    }
}
