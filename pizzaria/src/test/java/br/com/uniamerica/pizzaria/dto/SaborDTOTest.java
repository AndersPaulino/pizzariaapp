package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Sabor;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class SaborDTOTest {
    private Sabor sabor;
    private SaborDTO saborDTO;

    @Test
    void testeConstructorWithSabor(){
        sabor = new Sabor();
        saborDTO = new SaborDTO(sabor);

        assertEquals(sabor.getId(), saborDTO.getId());
        assertEquals(sabor.getNomeSabor(), saborDTO.getNomeSabor());
        assertEquals(sabor.getAtualizar(), saborDTO.getAtualizar());
        assertEquals(sabor.getRegistro(), saborDTO.getRegistro());
        assertEquals(sabor.isAtivo(), saborDTO.isAtivo());
    }

    @Test
    void testeConstructorWithIndividualsParameters(){
        saborDTO = new SaborDTO(1L, true, "Calabresa", LocalDateTime.now(), LocalDateTime.now());

        assertEquals(1l, saborDTO.getId());
        assertEquals(true, saborDTO.isAtivo());
        assertEquals("Calabresa", saborDTO.getNomeSabor());
    }
}
