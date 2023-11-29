package br.com.uniamerica.pizzaria.controller;

import br.com.uniamerica.pizzaria.dto.FuncionarioDTO;
import br.com.uniamerica.pizzaria.dto.atualizar.FuncionarioAtualizarDTO;
import br.com.uniamerica.pizzaria.dto.cadastro.FuncionarioCadastroDTO;
import br.com.uniamerica.pizzaria.entity.Funcionario;
import br.com.uniamerica.pizzaria.service.FuncionarioService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FuncionarioController.class)
class FuncionarioControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FuncionarioService funcionarioService;

    @Autowired
    private FuncionarioController funcionarioController;

    @Autowired
    private ObjectMapper objectMapper;

    private FuncionarioDTO funcionarioDTO;
    private FuncionarioAtualizarDTO funcionarioAtualizarDTO;
    private FuncionarioCadastroDTO funcionarioCadastroDTO;
    private Funcionario funcionario;

    @BeforeEach
    void setUp(){
        funcionario = new Funcionario();
        funcionario.setNomeFuncionario("Anderson");
        this.funcionario.setAtivo(true);
        this.funcionario.setRegistro(LocalDateTime.now());
        funcionarioDTO = new FuncionarioDTO(funcionario);
        funcionarioCadastroDTO = new FuncionarioCadastroDTO(funcionario);
        funcionarioAtualizarDTO = new FuncionarioAtualizarDTO(funcionario);
    }
    @Test
    @WithMockUser(username = "user", roles = "USER")
    void findAll_ReturnsListOfFuncionarioDTO() throws Exception {
        List<FuncionarioDTO> funcionarios = Collections.singletonList(funcionarioDTO);
        when(funcionarioService.findAll()).thenReturn(funcionarios);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/funcionario")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(objectMapper.writeValueAsString(funcionarios)))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    @WithMockUser(username = "user", roles = "USER")
    void findById_WithValidId_ReturnsFuncionarioDTO() throws Exception {
        when(funcionarioService.findById(1L)).thenReturn(Optional.of(funcionarioDTO));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/funcionario/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
