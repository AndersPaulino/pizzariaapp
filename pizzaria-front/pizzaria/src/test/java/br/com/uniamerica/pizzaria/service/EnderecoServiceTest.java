package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.EnderecoDTO;
import br.com.uniamerica.pizzaria.entity.Endereco;
import br.com.uniamerica.pizzaria.repository.EnderecoRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class EnderecoServiceTest {
    @Mock
    private EnderecoRepository enderecoRepository;

    @InjectMocks
    private EnderecoService enderecoService;

    @Test
    void testBuscarEnderecosPorBairro() {
        Endereco endereco = new Endereco();
        List<EnderecoDTO> enderecos = Collections.singletonList(new EnderecoDTO(endereco)); // Simulando endereços retornados pelo repositório
        when(enderecoRepository.findByBairro("bairro")).thenReturn(enderecos);

        List<EnderecoDTO> enderecoDTOs = enderecoService.buscarEnderecosPorBairro("bairro");

        assertFalse(enderecoDTOs.isEmpty());
        // Adicione testes para validar a conversão de List<Endereco> para List<EnderecoDTO>
    }

    // Testes similares para os outros métodos do serviço Endereco

    @Test
    void testDeleteEndereco() {
        Endereco endereco = new Endereco(); // Simulação de um endereço retornado pelo repositório
        when(enderecoRepository.findById(1L)).thenReturn(Optional.of(endereco));

        assertDoesNotThrow(() -> enderecoService.deleteEndereco(1L));

        verify(enderecoRepository, times(1)).delete(endereco);
    }

    @Test
    void testDesativar() {
        Endereco endereco = new Endereco(); // Simulação de um endereço retornado pelo repositório
        when(enderecoRepository.findById(1L)).thenReturn(Optional.of(endereco));

        assertThrows(IllegalArgumentException.class, () -> enderecoService.desativar(1L));

        assertFalse(endereco.isAtivo());
        verify(enderecoRepository, times(1)).save(endereco);
    }
    @Test
    void testBuscarEnderecosPorRua() {
        enderecoRepository = mock(EnderecoRepository.class);
        enderecoService = new EnderecoService(enderecoRepository);
        Endereco enderecos = new Endereco();

        String rua = "Rua ABC";
        List<EnderecoDTO> enderecoList = Collections.singletonList(new EnderecoDTO(enderecos));
        when(enderecoRepository.findByRua(rua)).thenReturn(enderecoList);

        List<EnderecoDTO> result = enderecoService.buscarEnderecosPorRua(rua);
        assertEquals(enderecoList.size(), result.size());

        verify(enderecoRepository, times(1)).findByRua(rua);
    }

    // Write similar tests for other methods like buscarEnderecosPorNumero, findAll, findById, findByAtivo, findByDiaRegistro, findByDiaAtualizar

    @Test
    void testCadastrar() {
        enderecoRepository = mock(EnderecoRepository.class);
        enderecoService = new EnderecoService(enderecoRepository);

        Endereco endereco = new Endereco();
        assertDoesNotThrow(() -> enderecoService.cadastrar(endereco));

        verify(enderecoRepository, times(1)).save(endereco);
    }
}
