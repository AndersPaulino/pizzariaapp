package br.com.uniamerica.pizzaria.repository;

import br.com.uniamerica.pizzaria.entity.Cliente;
import br.com.uniamerica.pizzaria.entity.Venda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface VendaRepository extends JpaRepository<Venda, Long> {
    @Query("SELECT e FROM Venda e WHERE e.ativo = :ativo")
    List<Venda> findByAtivo(@Param("ativo") boolean ativo);

    @Query("SELECT e FROM Venda e WHERE DATE(e.registro) = :registro")
    List<Venda> findByDiaRegistro(@Param("registro") LocalDate registro);

    @Query("SELECT e FROM Venda e WHERE DATE(e.atualizar) = :atualizar")
    List<Venda> findByDiaAtualizar(@Param("atualizar") LocalDate atualizar);
}
