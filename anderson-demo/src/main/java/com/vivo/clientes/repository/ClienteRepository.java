package com.vivo.clientes.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import com.vivo.clientes.model.Cliente;

@Service
public interface ClienteRepository extends MongoRepository<Cliente, String> {
	 	@Query(value = "{ 'cpf' : ?0 }")	
	    List<Cliente> findByCPF(String cpf);
	
}