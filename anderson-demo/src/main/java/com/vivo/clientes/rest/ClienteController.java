package com.vivo.clientes.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vivo.clientes.model.*;
import com.vivo.clientes.repository.ClienteRepository;

/**
 * API Rest
 * @author Anderson
 *
 */
@RestController
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@CrossOrigin
	@RequestMapping(value="/getCliente/{id}", method=RequestMethod.GET, produces="application/json")
	public Cliente getCliente(@PathVariable String id) {
		return clienteRepository.findById(id).get();
	}
	
	@CrossOrigin
	@PostMapping("/postCliente")
	public String postCliente(@RequestBody Cliente cliente) {

		// Salva a cliente no mongodb
		clienteRepository.save(cliente);
		
		// retorna um json mínimo só com um campo do ID do doc recem criado - 
		return "{ \"id\": \""+ cliente.getId() + "\"}";
	}
	
	@CrossOrigin
	@RequestMapping(value="/listClientes",method=RequestMethod.GET, produces="application/json")
	public List<Cliente> listClientes() {
		
		// Lista todas as tasks do banco	
		return clienteRepository.findAll();
	}
	
	@CrossOrigin
	@RequestMapping(value="/deleteCliente/{id}", method=RequestMethod.DELETE, produces="application/json")
	public void deleteCliente(@PathVariable String id) {
		clienteRepository.deleteById(id);
	}
	
	@CrossOrigin
	@RequestMapping(value="/getClienteByCPF/{cpf}", method=RequestMethod.GET, produces="application/json")
	public List<Cliente> getClienteByCPF(@PathVariable String cpf) {
		return clienteRepository.findByCPF(cpf);
	}
	
	
}
