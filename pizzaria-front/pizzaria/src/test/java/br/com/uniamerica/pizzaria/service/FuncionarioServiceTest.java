package br.com.uniamerica.pizzaria.service;

import br.com.uniamerica.pizzaria.dto.FuncionarioDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.FuncionarioAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.FuncionarioCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Funcionario;
import br.com.uniamerica.pizzaria.repository.FuncionarioRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class FuncionarioServiceTest {
    @Mock
    private FuncionarioRepository funcionarioRepository;

    @InjectMocks
    private FuncionarioService funcionarioService;

    @Test
    void testFindAll() {
        when(funcionarioRepository.findAll()).thenReturn(Collections.singletonList(new Funcionario()));

        List<FuncionarioDTO> funcionariosDTO = funcionarioService.findAll();

        assertFalse(funcionariosDTO.isEmpty());
        // Adicione aqui os testes para garantir a conversão correta para FuncionarioDTO
    }

    @Test
    void testFindById() {
        Long id = 1L;
        when(funcionarioRepository.findById(id)).thenReturn(Optional.of(new Funcionario()));

        Optional<FuncionarioDTO> funcionarioDTO = funcionarioService.findById(id);

        assertTrue(funcionarioDTO.isPresent());
        // Adicione aqui os testes para garantir a conversão correta para FuncionarioDTO
    }

    @Test
    void testFindByName() {
        String nomeFuncionario = "Nome";
        when(funcionarioRepository.findByName(nomeFuncionario)).thenReturn(new Funcionario());

        FuncionarioDTO funcionarioDTO = funcionarioService.findByName(nomeFuncionario);

        assertNotNull(funcionarioDTO);
        // Adicione aqui os testes para garantir a conversão correta para FuncionarioDTO
    }
    @Test
    void testFindByAtivo() {
        boolean ativo = true;
        when(funcionarioRepository.findByAtivo(ativo)).thenReturn(Collections.singletonList(new Funcionario()));

        List<FuncionarioDTO> funcionariosDTO = funcionarioService.findByAtivo(ativo);

        assertFalse(funcionariosDTO.isEmpty());
        // Adicione aqui os testes para garantir a conversão correta para FuncionarioDTO
    }

    @Test
    void testFindByDiaRegistro() {
        LocalDate registro = LocalDate.now();
        when(funcionarioRepository.findByDiaRegistro(registro)).thenReturn(Collections.singletonList(new Funcionario()));

        List<FuncionarioCadastroDTO> funcionariosCadastroDTO = funcionarioService.findByDiaRegistro(registro);

        assertFalse(funcionariosCadastroDTO.isEmpty());
        // Adicione aqui os testes para garantir a conversão correta para FuncionarioCadastroDTO
    }

    @Test
    void testFindByDiaAtualizar() {
        LocalDate atualizar = LocalDate.now();
        when(funcionarioRepository.findByDiaAtualizar(atualizar)).thenReturn(Collections.singletonList(new Funcionario()));

        List<FuncionarioAtualizarDTO> funcionariosAtualizarDTO = funcionarioService.findByDiaAtualizar(atualizar);

        assertFalse(funcionariosAtualizarDTO.isEmpty());
        // Adicione aqui os testes para garantir a conversão correta para FuncionarioAtualizarDTO
    }

    @Test
    void testDeletarFuncionario() {
        Long funcionarioId = 1L;
        Funcionario funcionario = new Funcionario();
        when(funcionarioRepository.findById(funcionarioId)).thenReturn(java.util.Optional.of(funcionario));

        funcionarioService.deletarFuncionario(funcionarioId);

        verify(funcionarioRepository, times(1)).delete(funcionario);
    }
    @Test
    void testCadastrar() {
        funcionarioRepository = mock(FuncionarioRepository.class);
        funcionarioService = new FuncionarioService(funcionarioRepository);

        Funcionario funcionario = new Funcionario();
        assertDoesNotThrow(() -> funcionarioService.cadastrar(funcionario));

        verify(funcionarioRepository, times(1)).save(funcionario);
    }

    @Test
    void testAtualizarFuncionario() {
        funcionarioRepository = mock(FuncionarioRepository.class);
        funcionarioService = new FuncionarioService(funcionarioRepository);

        Long id = 1L;
        Funcionario funcionario = new Funcionario();
        funcionario.setNomeFuncionario("Novo Nome");

        Funcionario funcionarioExistente = new Funcionario();
        funcionarioExistente.setNomeFuncionario("Nome Antigo");

        when(funcionarioRepository.findById(id)).thenReturn(Optional.of(funcionarioExistente));
        when(funcionarioRepository.save(funcionarioExistente)).thenReturn(funcionarioExistente);

        Funcionario result = funcionarioService.atualizarFuncionario(id, funcionario);
        assertEquals(funcionario.getNomeFuncionario(), result.getNomeFuncionario());

        verify(funcionarioRepository, times(1)).findById(id);
        verify(funcionarioRepository, times(1)).save(funcionarioExistente);
    }
}
