package br.com.uniamerica.pizzaria.controller;

import br.com.uniamerica.pizzaria.dto.PizzaDTO;
import br.com.uniamerica.pizzaria.dto.SaborDTO;
import br.com.uniamerica.pizzaria.entity.Pizza;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.service.PizzaService;
import br.com.uniamerica.pizzaria.service.SaborService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pizza")
@CrossOrigin(origins = "http://localhost:4200")
public class PizzaController {

    private final PizzaService pizzaService;
    private final SaborService saborService;

    @Autowired
    public PizzaController(PizzaService pizzaService, SaborService saborService) {
        this.pizzaService = pizzaService;
        this.saborService = saborService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<PizzaDTO> findById(@PathVariable Long id) {
        PizzaDTO pizzaDTO = pizzaService.findById(id);
        return ResponseEntity.ok(pizzaDTO);
    }

    @GetMapping
    public ResponseEntity<List<PizzaDTO>> findAll() {
        List<PizzaDTO> pizzaDTOs = pizzaService.findAll();
        return ResponseEntity.ok(pizzaDTOs);
    }

    @PostMapping
    public ResponseEntity<String> cadastrar(@RequestBody Pizza pizza) {
        try {
            List<Sabor> sabores = pizza.getSabor();

            if (sabores == null || sabores.isEmpty()) {
                return ResponseEntity.badRequest().body("A pizza deve ter pelo menos um sabor.");
            }

            for (Sabor sabor : sabores) {
                Optional<SaborDTO> saborOptional = saborService.findById(sabor.getId());

                if (saborOptional.isEmpty()) {
                    return ResponseEntity.badRequest().body("Sabor não encontrado com o ID: " + sabor.getId());
                }
            }

            pizzaService.cadastrarPizza(pizza);
            return ResponseEntity.ok("Registro cadastrado com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro interno no servidor");
        }
    }




    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable Long id, @RequestBody Pizza pizza) {
        try {
            pizzaService.atualizarPizza(id, pizza);
            return ResponseEntity.ok().body("Registro atualizado com sucesso!");
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarPizza(@PathVariable Long id) {
        pizzaService.deletarPizza(id);
        return ResponseEntity.ok("Pizza com ID " + id + " excluída com sucesso.");
    }
}
