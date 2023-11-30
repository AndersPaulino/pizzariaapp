package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.ClienteDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.ClienteAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.ClienteCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    private ClienteRepository clienteRepository;
    @Autowired
    public ClienteService(ClienteRepository clienteRepository){
        this.clienteRepository = clienteRepository;
    }

    @Transactional(readOnly = true)
    public Optional<ClienteDTO> findById(Long id) {
        return clienteRepository.findById(id).map(ClienteDTO::new);
    }
    @Transactional(readOnly = true)
    public List<ClienteDTO> findAll(){
        List<Cliente> clientes = clienteRepository.findAll();
        return clientes.stream()
                .map(ClienteDTO::new)
                .toList();
    }
    @Transactional(readOnly = true)
    public ClienteDTO findByName(String nomeCliente){
        Cliente cliente = clienteRepository.findByName(nomeCliente);
        return new ClienteDTO(cliente);
    }

    @Transactional(readOnly = true)
    public ClienteDTO findByCpf(String cpf){
        Cliente cliente = clienteRepository.findByCpf(cpf);
        return new ClienteDTO(cliente);
    }

    @Transactional(readOnly = true)
    public List<ClienteDTO> findByAtivo(boolean ativo){
        List<Cliente> clientes = clienteRepository.findByAtivo(ativo);

        return clientes.stream()
                .map(ClienteDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<ClienteCadastroDTO> findByDiaRegistro(LocalDate registro){
        List<Cliente> clientes = clienteRepository.findByDiaRegistro(registro);

        return clientes.stream()
                .map(ClienteCadastroDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<ClienteAtualizarDTO> findByDiaAtualizar(LocalDate atualizar){
        List<Cliente> clientes = clienteRepository.findByDiaAtualizar(atualizar);

        return clientes.stream()
                .map(ClienteAtualizarDTO::new)
                .toList();
    }

    @Transactional(rollbackFor = Exception.class)
    public void cadastrar(Cliente cliente){
        clienteRepository.save(cliente);
    }

    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void atualizar(Long id, Cliente cliente) {
        Optional<Cliente> clienteOptional = clienteRepository.findById(id);

        if (clienteOptional.isPresent()) {
            Cliente cliente1 = clienteOptional.get();
            clienteRepository.save(cliente1);
        } else {
            throw new IllegalArgumentException("Id do Cliente não encontrado!");
        }
    }

    public void deleteClient(Long id) {
        Optional<Cliente> clienteOptional = clienteRepository.findById(id);

        if (clienteOptional.isPresent()) {
            clienteRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Id do Cliente não encontrado!");
        }
    }


    public void desativar(Long id){
        Optional<Cliente> clienteOptional = clienteRepository.findById(id);


        if (clienteOptional.isPresent()){
            Cliente cliente = clienteOptional.get();
            cliente.setAtivo(false);
            clienteRepository.save(cliente);
            throw new IllegalArgumentException("Cliente desativado com sucesso!");
        }else {
            throw new IllegalArgumentException("ID do Cliente inválido!");
        }
    }
}
