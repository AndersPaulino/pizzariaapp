package br.com.uniamerica.pizzaria.repository;

import br.com.uniamerica.pizzaria.dto.EnderecoDTO;
import br.com.uniamerica.pizzaria.entity.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
    @Query("SELECT e FROM Endereco e WHERE e.bairro = :bairro")
    List<EnderecoDTO> findByBairro(@Param("bairro") String bairro);
    @Query("SELECT e FROM Endereco e WHERE e.numero = :numero")
    List<EnderecoDTO> findByNumero(@Param("numero") int numero);
    @Query("SELECT e FROM Endereco e WHERE e.rua = :rua")
    List<EnderecoDTO> findByRua(@Param("rua") String rua);
    @Query("SELECT e FROM Endereco e WHERE e.ativo = :ativo")
    List<Endereco> findByAtivo(@Param("ativo") boolean ativo);

    @Query("SELECT e FROM Endereco e WHERE DATE(e.registro) = :registro")
    List<Endereco> findByDiaRegistro(@Param("registro") LocalDate registro);

    @Query("SELECT e FROM Endereco e WHERE DATE(e.atualizar) = :atualizar")
    List<Endereco> findByDiaAtualizar(@Param("atualizar") LocalDate atualizar);
}
