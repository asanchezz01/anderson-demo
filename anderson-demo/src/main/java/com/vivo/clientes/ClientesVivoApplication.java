package com.vivo.clientes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.vivo.clientes.repository.ClienteRepository;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = ClienteRepository.class)
public class ClientesVivoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientesVivoApplication.class, args);
	}
}
