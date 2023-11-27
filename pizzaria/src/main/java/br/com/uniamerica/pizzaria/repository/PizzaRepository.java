package br.com.uniamerica.pizzaria.repository;

import br.com.uniamerica.pizzaria.entity.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Long> {
    @Query("SELECT e FROM Pizza e WHERE e.ativo = :ativo")
    List<Pizza> findByAivo(@Param("ativo") boolean ativo);

    @Query("SELECT e FROM Pizza e WHERE DATE(e.registro) = :registro")
    List<Pizza> findByDiaRegistro(@Param("registro") LocalDate registro);

    @Query("SELECT e FROM Pizza e WHERE DATE(e.atualizar) = :atualizar")
    List<Pizza> findByDiaAtualizar(@Param("atualizar") LocalDate registro);
}
