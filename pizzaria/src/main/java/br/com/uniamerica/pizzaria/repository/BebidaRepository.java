package br.com.uniamerica.pizzaria.repository;

import br.com.uniamerica.pizzaria.entity.Bebida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BebidaRepository extends JpaRepository<Bebida, Long> {
    @Query("SELECT e FROM Bebida e WHERE e.nomeBebida = :nomeBebida")
    public Bebida findByName(@Param("nomeBebida") String nomeBebida);

    @Query("SELECT e FROM Bebida e WHERE e.ativo = :ativo")
    public List<Bebida> findByAtivo(@Param("ativo") boolean ativo);

    @Query("SELECT e FROM Bebida e WHERE DATE(e.registro) = :registro")
    List<Bebida> findByDiaRegistro(@Param("registro") LocalDate registro);

    @Query("SELECT e FROM Bebida e WHERE DATE(e.atualizar) = :atualizar")
    List<Bebida> findByDiaAtualizar(@Param("atualizar") LocalDate registro);
}
