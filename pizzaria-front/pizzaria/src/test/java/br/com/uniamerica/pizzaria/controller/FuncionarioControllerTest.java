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

}
