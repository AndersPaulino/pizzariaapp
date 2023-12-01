package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.PizzaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.PizzaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.PizzaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Pizza;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.entity.Tamanho;
import br.com.uniamerica.pizzaria.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PizzaService {
    private final PizzaRepository pizzaRepository;

    @Autowired
    public PizzaService(PizzaRepository pizzaRepository) {
        this.pizzaRepository = pizzaRepository;
    }
    @Transactional(readOnly = true)
    public PizzaDTO findById(Long id) {
        Pizza entity = pizzaRepository.findById(id).orElse(null);
        if (entity == null) {
            return null;
        }
        return new PizzaDTO(entity);
    }
    @Transactional(readOnly = true)
    public List<PizzaDTO> findAll() {
        List<Pizza> pizzas = pizzaRepository.findAll();
        return pizzas.stream()
                .map(PizzaDTO::new)
                .toList(); // Utilizando o método toList() para coletar os elementos do stream em uma lista
    }


    @Transactional(readOnly = true)
    public List<PizzaDTO> findByAtivo(boolean ativo){
        List<Pizza> pizzas = pizzaRepository.findByAivo(ativo);
        return pizzas.stream()
                .map(PizzaDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<PizzaCadastroDTO> findByDiaRegistro(LocalDate registro){
        List<Pizza> pizzas = pizzaRepository.findByDiaRegistro(registro);
        return pizzas.stream()
                .map(PizzaCadastroDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<PizzaAtualizarDTO> findByDiaAtualizar(LocalDate atualizar){
        List<Pizza> pizzas = pizzaRepository.findByDiaAtualizar(atualizar);
        return pizzas.stream()
                .map(PizzaAtualizarDTO::new)
                .toList();
    }

    public void cadastrarPizza(Pizza pizza) {
        validarPizza(pizza);
        pizzaRepository.save(pizza);
    }

    private void validarPizza(Pizza pizza) {
        List<String> errors = new ArrayList<>();
        Tamanho tamanho = pizza.getTamanho();

        if (tamanho == null) {
            errors.add("O tamanho da pizza deve ser fornecido.");
        } else {
            List<Sabor> sabores = pizza.getSabor();

            if (tamanho == Tamanho.PEQUENA){
                pizza.setQtdeSabor(1);
                pizza.setValorPizza(new BigDecimal("20"));
            }
            if (tamanho == Tamanho.MEDIA){
                pizza.setQtdeSabor(2);
                pizza.setValorPizza(new BigDecimal("30"));
            }
            if (tamanho == Tamanho.GRANDE){
                pizza.setQtdeSabor(3);
                pizza.setValorPizza(new BigDecimal("40"));
            }
            if (tamanho == Tamanho.FAMILIA){
                pizza.setQtdeSabor(4);
                pizza.setValorPizza(new BigDecimal("50"));
            }
            pizza.setQtdeSabor(sabores.size());
        }

        if (!errors.isEmpty()) {
            throw new IllegalArgumentException(String.join("\n", errors));
        }
    }

    public Pizza atualizarPizza(Long id, Pizza pizzaAtualizada) {
        validarPizza(pizzaAtualizada);

        Pizza pizzaExistente = pizzaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("A pizza com o ID " + id + " não existe."));

        pizzaExistente.setTamanho(pizzaAtualizada.getTamanho());
        pizzaExistente.setSabor(pizzaAtualizada.getSabor());
        pizzaExistente.setValorPizza(pizzaAtualizada.getValorPizza());

        return pizzaRepository.save(pizzaExistente);
    }
    public void deletarPizza(Long pizzaId) {
        Pizza pizzaExistente = pizzaRepository.findById(pizzaId)
                .orElseThrow(() -> new IllegalStateException("Pizza não encontrada com ID: " + pizzaId));
        pizzaRepository.delete(pizzaExistente);
    }
}
