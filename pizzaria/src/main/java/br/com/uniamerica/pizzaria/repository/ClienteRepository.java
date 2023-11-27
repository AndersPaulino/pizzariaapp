package br.com.uniamerica.pizzaria.repository;

import br.com.uniamerica.pizzaria.entity.Cliente;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    @Query("SELECT e FROM Cliente e WHERE e.nomeCliente = :nomeCliente")
    List<Cliente> findByName(@Param("nomeCliente") String nomeCliente);

    @Query("SELECT e FROM Cliente e WHERE e.cpf = :cpf")
    List<Cliente> findByCpf(@Param("cpf") String cpf);

    @Query("SELECT e FROM Cliente e WHERE e.ativo = :ativo")
    List<Cliente> findByAtivo(@Param("ativo") boolean ativo);

    @Query("SELECT e FROM Cliente e WHERE DATE(e.registro) = :registro")
    List<Cliente> findByDiaRegistro(@Param("registro") LocalDate registro);

    @Query("SELECT e FROM Cliente e WHERE DATE(e.atualizar) = :atualizar")
    List<Cliente> findByDiaAtualizar(@Param("atualizar") LocalDate atualizar);
}
