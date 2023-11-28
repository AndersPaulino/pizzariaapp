package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.EnderecoDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.EnderecoAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.EnderecoCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Endereco;
import br.com.uniamerica.pizzaria.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EnderecoService {
    private EnderecoRepository enderecoRepository;
    @Autowired
    public EnderecoService(EnderecoRepository enderecoRepository){
        this.enderecoRepository = enderecoRepository;
    }

    @Transactional(readOnly = true)
    public List<EnderecoDTO> buscarEnderecosPorBairro(String bairro) {
        return enderecoRepository.findByBairro(bairro);
    }
    @Transactional(readOnly = true)
    public List<EnderecoDTO> buscarEnderecosPorRua(String rua) {
        return enderecoRepository.findByRua(rua);
    }
    @Transactional(readOnly = true)
    public List<EnderecoDTO> buscarEnderecosPorNumero(int numero) {
        return enderecoRepository.findByNumero(numero);
    }

    @Transactional(readOnly = true)
    public List<EnderecoDTO> findAll() {
        List<Endereco> enderecos = enderecoRepository.findAll();
        return enderecos.stream().map(EnderecoDTO::new).toList();
    }
    @Transactional(readOnly = true)
    public Optional<EnderecoDTO> findById(Long id) {
        return enderecoRepository.findById(id)
                .map(EnderecoDTO::new);
    }

    @Transactional(readOnly = true)
    public List<EnderecoDTO> findByAtivo(boolean ativo){
        List<Endereco> enderecos = enderecoRepository.findByAtivo(ativo);

        return enderecos.stream()
                .map(EnderecoDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<EnderecoCadastroDTO> findByDiaRegistro(LocalDate registro){
        List<Endereco> enderecos = enderecoRepository.findByDiaRegistro(registro);

        return enderecos.stream()
                .map(EnderecoCadastroDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<EnderecoAtualizarDTO> findByDiaAtualizar(LocalDate atualizar){
        List<Endereco> enderecos = enderecoRepository.findByDiaAtualizar(atualizar);

        return enderecos.stream()
                .map(EnderecoAtualizarDTO::new)
                .toList();
    }

    @Transactional(rollbackFor = Exception.class)
    public void cadastrar(Endereco endereco){
        enderecoRepository.save(endereco);
    }
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void atualizar(Long id, Endereco endereco){
        Optional<Endereco> enderecoOptional = enderecoRepository.findById(id);

        if (enderecoOptional.isPresent()){
            Endereco enderecoExistente = enderecoOptional.get();
            enderecoRepository.save(enderecoExistente);
        } else {
            throw new IllegalArgumentException("Endereço não encontrado com ID: " + id);
        }
    }

    public void deleteEndereco(Long id){
        Endereco endereco = enderecoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Endereço não encontrado com ID: " + id));

        enderecoRepository.delete(endereco);
    }

    public void desativar(Long id){
        Optional<Endereco> enderecoOptional = enderecoRepository.findById(id);

        if (enderecoOptional.isPresent()){
            Endereco endereco = enderecoOptional.get();
            endereco.setAtivo(false);
            enderecoRepository.save(endereco);
            throw new IllegalArgumentException("Endereço desativado com sucesso!");
        } else {
            throw new IllegalArgumentException("ID do endereço inválido!");
        }
    }

}
