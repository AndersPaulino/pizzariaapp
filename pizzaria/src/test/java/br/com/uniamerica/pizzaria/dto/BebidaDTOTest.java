package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.Bebida;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class BebidaDTOTest {
    private Bebida bebida;
    private BebidaDTO bebidaDTO;

    @Test
    void testConstructorWithBebida(){
        bebida = new Bebida();
        bebida.setNomeBebida("COCA");
        bebidaDTO = new BebidaDTO(bebida);

        assertEquals(bebida.getId(), bebidaDTO.getId());
        assertEquals(bebida.getNomeBebida(), bebidaDTO.getNomeBebida());
        assertEquals(bebida.getAtualizar(), bebidaDTO.getAtualizar());
        assertEquals(bebida.getRegistro(), bebidaDTO.getRegistro());
        assertEquals(bebida.isAtivo(), bebidaDTO.isAtivo());

    }

    @Test
    void testeConstructorWithIndividualsParameters(){
        bebidaDTO = new BebidaDTO(1L, true, "COCA", BigDecimal.valueOf(5),LocalDateTime.now(), LocalDateTime.now());

        assertEquals(1L, bebidaDTO.getId());
        assertEquals("COCA", bebidaDTO.getNomeBebida());
        assertEquals(BigDecimal.valueOf(5), bebidaDTO.getValorBebida());
        assertEquals(true, bebidaDTO.isAtivo());
    }
}
