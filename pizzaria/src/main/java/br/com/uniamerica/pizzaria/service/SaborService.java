package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.SaborDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.SaborAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.SaborCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Sabor;
import br.com.uniamerica.pizzaria.repository.SaborRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class SaborService {
    private final SaborRepository saborRepository;

    @Autowired
    public SaborService(SaborRepository saborRepository) {
        this.saborRepository = saborRepository;
    }

    @Transactional(readOnly = true)
    public Optional<SaborDTO> findById(Long id) {
        return saborRepository.findById(id)
                .map(SaborDTO::new);
    }

    @Transactional(readOnly = true)
    public List<SaborDTO> findAll() {
        List<Sabor> sabores = saborRepository.findAll();
        return sabores.stream().map(SaborDTO::new).toList();
    }
    @Transactional(readOnly = true)
    public SaborDTO findByName(String nomeSabor){
        Sabor sabor = saborRepository.findByName(nomeSabor);
        return new SaborDTO(sabor);
    }
    @Transactional(readOnly = true)
    public List<SaborDTO> findByAtivo(boolean ativo){
        List<Sabor> sabors = saborRepository.findByAivo(ativo);
        return sabors.stream()
                .map(SaborDTO::new)
                .toList();
    }
    @Transactional(readOnly = true)
    public List<SaborCadastroDTO> findByDiaRegistro(LocalDate registro){
        List<Sabor> sabors = saborRepository.findByDiaRegistro(registro);
        return sabors.stream()
                .map(SaborCadastroDTO::new)
                .toList();
    }
    @Transactional(readOnly = true)
    public List<SaborAtualizarDTO> findByDiaAtualizar(LocalDate atualizar){
        List<Sabor> sabors = saborRepository.findByDiaAtualizar(atualizar);
        return sabors.stream()
                .map(SaborAtualizarDTO::new)
                .toList();
    }

    @Transactional(rollbackFor = Exception.class)
    public void cadastrar(Sabor sabor) {
        saborRepository.save(sabor);
    }

    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void atualizar(Long id, Sabor sabor) {
        Optional<Sabor> sabors = saborRepository.findById(id);

        if (sabors.isPresent()) {
            Sabor saborExistente = sabors.get();

            if (sabor.getNomeSabor() != null) {
                saborExistente.setNomeSabor(sabor.getNomeSabor());
                saborRepository.save(saborExistente);
            }
        } else {
            throw new IllegalArgumentException("Id do Sabor Inválido!");
        }
    }

    public void deletaSabor(Long id) {
        Sabor sabor = saborRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Sabor não encontrada com ID: "+ id));
        saborRepository.delete(sabor);
    }

    public void desativar(Long id){
        Optional<Sabor> sabor = saborRepository.findById(id);
        Sabor sabor1 = sabor.get();

        if (sabor.isPresent()){
            sabor1.setAtivo(false);
            saborRepository.save(sabor1);
            throw new IllegalArgumentException("Sabor desativado com sucesso!");
        }else {
            throw new IllegalArgumentException("ID do Sabor inválido!");
        }
    }
}
