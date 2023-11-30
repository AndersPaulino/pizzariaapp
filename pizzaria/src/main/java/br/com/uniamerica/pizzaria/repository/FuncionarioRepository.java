package br.com.uniamerica.pizzaria.repository;

import br.com.uniamerica.pizzaria.entity.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
    @Query("SELECT f FROM Funcionario f WHERE f.nomeFuncionario = :nomeFuncionario")
    Funcionario findByName(@Param("nomeFuncionario") String nomeFuncionario);
    @Query("SELECT e FROM Funcionario e WHERE e.ativo = :ativo")
    List<Funcionario> findByAtivo(@Param("ativo") boolean ativo);

    @Query("SELECT e FROM Funcionario e WHERE DATE(e.registro) = :registro")
    List<Funcionario> findByDiaRegistro(@Param("registro") LocalDate registro);

    @Query("SELECT e FROM Funcionario e WHERE DATE(e.atualizar) = :atualizar")
    List<Funcionario> findByDiaAtualizar(@Param("atualizar") LocalDate atualizar);
}
