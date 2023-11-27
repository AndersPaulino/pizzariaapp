package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.ClienteDTO;
import br.com.uniamerica.pizzaria.dto.EnderecoDTO;
import br.com.uniamerica.pizzaria.dto.FuncionarioDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.EnderecoAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.FuncionarioAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.EnderecoCadastroDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.FuncionarioCadastradoDTO;
import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.entity.Endereco;
import br.com.uniamerica.pizzaria.entity.Funcionario;
import br.com.uniamerica.pizzaria.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FuncionarioService {
    private final FuncionarioRepository funcionarioRepository;
    @Autowired
    public FuncionarioService(FuncionarioRepository funcionarioRepository){this.funcionarioRepository = funcionarioRepository;}


    @Transactional(readOnly = true)
    public List<FuncionarioDTO> findAll() {
        List<Funcionario> funcionarios = funcionarioRepository.findAll();
        return funcionarios.stream().map(FuncionarioDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public Optional<FuncionarioDTO> findById(Long id) {
        return funcionarioRepository.findById(id).map(FuncionarioDTO::new);
    }
    @Transactional(readOnly = true)
    public FuncionarioDTO findByName(String nomeFuncionario) {
        Funcionario funcionario = funcionarioRepository.findByName(nomeFuncionario);
        return new FuncionarioDTO(funcionario);
    }

    @Transactional(readOnly = true)
    public List<FuncionarioDTO> findByAtivo(boolean ativo){
        List<Funcionario> funcionarios = funcionarioRepository.findByAtivo(ativo);

        return funcionarios.stream()
                .map(FuncionarioDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<FuncionarioCadastradoDTO> findByDiaRegistro(LocalDate registro){
        List<Funcionario> funcionarios = funcionarioRepository.findByDiaRegistro(registro);

        return funcionarios.stream()
                .map(FuncionarioCadastradoDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<FuncionarioAtualizarDTO> findByDiaAtualizar(LocalDate atualizar){
        List<Funcionario> funcionarios = funcionarioRepository.findByDiaAtualizar(atualizar);

        return funcionarios.stream()
                .map(FuncionarioAtualizarDTO::new)
                .toList();
    }

    @Transactional(rollbackFor = Exception.class)
    public void cadastrar(Funcionario funcionario) {
        funcionarioRepository.save(funcionario);
    }

    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public Funcionario atualizarFuncionario(Long id, Funcionario funcionario) {
        validarFuncionario(funcionario);
        Optional<Funcionario> funcionarioOptional = funcionarioRepository.findById(id);
        if (funcionarioOptional.isPresent()) {
            Funcionario funcionarioExistente = funcionarioOptional.get();

            if (funcionario.getNomeFuncionario() != null) {
                funcionarioExistente.setNomeFuncionario(funcionario.getNomeFuncionario());
            }
            return funcionarioRepository.save(funcionarioExistente);
        } else {
            throw new IllegalArgumentException("Id do Funcionário inválido!");
        }
    }

    private void validarFuncionario(Funcionario funcionario) {
        if (funcionario.getNomeFuncionario() == null) {
            throw new IllegalArgumentException("Nome do Funcionário não informado!");
        }
    }


    public void deletarFuncionario(Long funcionarioId) {
        Funcionario funcionarioExistente = funcionarioRepository.findById(funcionarioId)
                .orElseThrow(() -> new IllegalArgumentException("Funcionario não encontrada com ID: " + funcionarioId));
        funcionarioRepository.delete(funcionarioExistente);
    }

}
