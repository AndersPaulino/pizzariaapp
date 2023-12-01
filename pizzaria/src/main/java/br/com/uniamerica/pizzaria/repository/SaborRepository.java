package br.com.uniamerica.pizzaria.repository;

import br.com.uniamerica.pizzaria.entity.Sabor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SaborRepository extends JpaRepository<Sabor, Long> {
    @Query("SELECT e FROM Sabor e WHERE e.nomeSabor = :nomeSabor")
    public Sabor findByName(@Param("nomeSabor") String nomeSabor);

    @Query("SELECT e FROM Sabor e WHERE e.ativo = :ativo")
    List<Sabor> findByAivo(@Param("ativo") boolean ativo);

    @Query("SELECT e FROM Sabor e WHERE DATE(e.registro) = :registro")
    List<Sabor> findByDiaRegistro(@Param("registro") LocalDate registro);

    @Query("SELECT e FROM Sabor e WHERE DATE(e.atualizar) = :atualizar")
    List<Sabor> findByDiaAtualizar(@Param("atualizar") LocalDate registro);
}
