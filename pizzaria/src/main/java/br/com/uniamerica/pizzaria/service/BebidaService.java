package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.BebidaDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.BebidaAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.BebidaCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Bebida;
import br.com.uniamerica.pizzaria.repository.BebidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BebidaService {

    private final BebidaRepository bebidaRepository;

    @Autowired
    public BebidaService(BebidaRepository bebidaRepository) {
        this.bebidaRepository = bebidaRepository;
    }
    @Transactional(readOnly = true)
    public Optional<BebidaDTO> findById(Long id) {
        return bebidaRepository.findById(id).map(BebidaDTO::new);
    }
    @Transactional(readOnly = true)
    public List<BebidaDTO> findAll() {
        List<Bebida> bebidas = bebidaRepository.findAll();
        return bebidas.stream().map(BebidaDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public BebidaDTO findByName(String nomeBebida) {
        Bebida bebidas = bebidaRepository.findByName(nomeBebida);
        return new BebidaDTO(bebidas);
    }

    @Transactional(readOnly = true)
    public List<BebidaDTO> findByAtivo(boolean ativo) {
        List<Bebida> bebidas = bebidaRepository.findByAtivo(ativo);

        return bebidas.stream()
                .map(BebidaDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<BebidaCadastroDTO> findByDiaRegistro(LocalDate registro) {
        List<Bebida> bebidas = bebidaRepository.findByDiaRegistro(registro);

        return bebidas.stream()
                .map(BebidaCadastroDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<BebidaAtualizarDTO> findByDiaAtualizar(LocalDate atualizar) {
        List<Bebida> bebidas = bebidaRepository.findByDiaAtualizar(atualizar);

        return bebidas.stream()
                .map(BebidaAtualizarDTO::new)
                .toList();
    }

    @Transactional(rollbackFor = Exception.class)
    public void cadastrar(Bebida bebida) {
        validarBebibda(bebida);
        bebidaRepository.save(bebida);
    }


    public void validarBebibda(final Bebida bebida) {
        if (bebida.getNomeBebida() == null || bebida.getNomeBebida().isEmpty()) {
            throw new IllegalArgumentException("Nome da Bebida não informado!");
        }
        if (bebida.getValorBebida() == null) {
            throw new IllegalArgumentException("Valor da Bebida não informado!");
        }
    }

    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void atualizar(Long id, Bebida bebida){
        validarBebibda(bebida);
        Optional<Bebida> bebidaOptional = bebidaRepository.findById(id);

        if (bebidaOptional.isPresent()){
            Bebida bebidaExistente = bebidaOptional.get();
            if (bebida.getNomeBebida() != null){
                bebidaExistente.setNomeBebida(bebida.getNomeBebida());
                bebidaRepository.save(bebidaExistente);
            }
            if (bebida.getValorBebida() != null){
                bebidaExistente.setValorBebida(bebida.getValorBebida());
                bebidaRepository.save(bebidaExistente);
            }
        }else {
            throw new IllegalArgumentException("Id da Bebida inválido!");
        }
    }


    public void deleteBebida(Long bebidaId) {
        Bebida bebidaExistente = bebidaRepository.findById(bebidaId)
                .orElseThrow(() -> new IllegalArgumentException("Bebida não encontrada com ID: " + bebidaId));
        bebidaRepository.delete(bebidaExistente);
    }


    public void desativar(Long id) {
        Optional<Bebida> bebidaOptional = bebidaRepository.findById(id);
        if (bebidaOptional.isPresent()) {
            Bebida bebida = bebidaOptional.get();
            bebida.setAtivo(false);
            bebidaRepository.save(bebida);
            throw new IllegalArgumentException("Bebida desativada com sucesso!");
        } else {
            throw new IllegalArgumentException("ID da Bebida inválido!");
        }
    }
}
