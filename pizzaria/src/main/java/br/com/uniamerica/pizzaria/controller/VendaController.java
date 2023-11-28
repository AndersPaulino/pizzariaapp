package br.com.uniamerica.pizzaria.controller;

import br.com.uniamerica.pizzaria.dto.VendaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.VendaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.VendaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Venda;
import br.com.uniamerica.pizzaria.service.VendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/vendas")
@CrossOrigin(origins = "*")
public class VendaController {

    private VendaService vendaService;

    @Autowired
    public VendaController(VendaService vendaService){
        this.vendaService = vendaService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<VendaDTO> findaById(@PathVariable Long id){
        return vendaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping
    public ResponseEntity<List<VendaDTO>> findAll(){
        List<VendaDTO> vendaDTOS = vendaService.findAll();
        return ResponseEntity.ok(vendaDTOS);
    }

    @GetMapping("ativo/{ativo}")
    public ResponseEntity<List<VendaDTO>> findByAtivo(@PathVariable boolean ativo) {
        try {
            List<VendaDTO> vendaDTOS = vendaService.findByAtivo(ativo);

            if (!vendaDTOS.isEmpty()) {
                return ResponseEntity.ok(vendaDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("registro/dia/{registro}")
    public ResponseEntity<List<VendaCadastroDTO>> findByDiaRegistro(@PathVariable("registro") LocalDate registro) {
        try {
            List<VendaCadastroDTO> vendaCadastroDTOS = vendaService.findByDiaRegistro(registro);

            if (!vendaCadastroDTOS.isEmpty()) {
                return ResponseEntity.ok(vendaCadastroDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("atualizar/dia/{atualizar}")
    public ResponseEntity<List<VendaAtualizarDTO>> findByDiaAtualizar(@PathVariable("atualizar") LocalDate atualizar) {
        try {
            List<VendaAtualizarDTO> vendaAtualizarDTOS = vendaService.findByDiaAtualizar(atualizar);

            if (!vendaAtualizarDTOS.isEmpty()) {
                return ResponseEntity.ok(vendaAtualizarDTOS);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @PostMapping
    public ResponseEntity<String> cadastrar(@RequestBody Venda venda){
        try {
            vendaService.cadastrar(venda);
            return ResponseEntity.ok().body("Registro cadastrado com sucesso!");
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @PutMapping("/id")
    public ResponseEntity<String> atualizar(@PathVariable Long id, @RequestBody Venda venda){
        try {
            vendaService.atualizar(id, venda);
            return ResponseEntity.ok("Registro atualizado com sucesso!");
        } catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarVenda(@PathVariable Long id){
        try {
            vendaService.deleteVenda(id);
            return ResponseEntity.ok("Registro deletado com sucesso!");
        } catch (IllegalArgumentException e){
            return ResponseEntity.status((HttpStatus.BAD_REQUEST)).body(e.getMessage());
        }
    }
    @DeleteMapping("/desativar/{id}")
    public ResponseEntity<String> desativar(@PathVariable Long id){
        try {
            vendaService.desativar(id);
            return ResponseEntity.ok().body("Registro desativado com sucesso!");
        } catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao desativar o registro.");

        }
    }
}
