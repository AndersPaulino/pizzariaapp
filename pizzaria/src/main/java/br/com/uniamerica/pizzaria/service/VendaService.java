package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.VendaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.VendaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.VendaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Venda;
import br.com.uniamerica.pizzaria.repository.VendaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class VendaService {
    private VendaRepository vendaRepository;


    public VendaService(VendaRepository vendaRepository){
        this.vendaRepository = vendaRepository;
    }


    @Transactional(readOnly = true)
    public Optional<VendaDTO> findById(Long id) {
        return vendaRepository.findById(id).map(VendaDTO::new);
    }

    @Transactional(readOnly = true)
    public List<VendaDTO> findAll(){
        List<Venda> vendas = vendaRepository.findAll();
        return vendas.stream()
                .map(VendaDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<VendaDTO> findByAtivo(boolean ativo){
        List<Venda> vendas = vendaRepository.findByAtivo(ativo);
        return vendas.stream()
                .map(VendaDTO::new)
                .toList();
    }
    @Transactional(readOnly = true)
    public List<VendaCadastroDTO> findByDiaRegistro(LocalDate registro){
        List<Venda> vendas = vendaRepository.findByDiaRegistro(registro);
        return vendas.stream()
                .map(VendaCadastroDTO::new)
                .toList();
    }
    @Transactional(readOnly = true)
    public List<VendaAtualizarDTO> findByDiaAtualizar(LocalDate atualizar){
        List<Venda> vendas = vendaRepository.findByDiaAtualizar(atualizar);
        return vendas.stream()
                .map(VendaAtualizarDTO::new)
                .toList();
    }
    @Transactional(rollbackFor = Exception.class)
    public void cadastrar(Venda venda){
        vendaRepository.save(venda);
    }

    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void atualizar(Long id, Venda venda){
        Optional<Venda> vendaOptional = vendaRepository.findById(id);

        if (vendaOptional.isPresent()){
            Venda vendaExistente = vendaOptional.get();
            vendaRepository.save(vendaExistente);
        } else {
            throw new IllegalArgumentException("Id da venda não encontrado!");
        }
    }


    public void deleteVenda(Long id){
        Venda venda = vendaRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("Venda não econtrada com o ID: " + id));
        vendaRepository.delete(venda);
    }
    public void desativar(Long id){
        Optional<Venda> vendaOptional = vendaRepository.findById(id);
        Venda venda = vendaOptional.get();

        if (vendaOptional.isPresent()){
            venda.setAtivo(false);
            vendaRepository.save(venda);
            throw new IllegalArgumentException("Venda desativada com sucesso!");
        } else {
            throw new IllegalArgumentException("ID da venda inválido!");
        }
    }
}
