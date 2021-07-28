import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-search',
  templateUrl: './cliente-search.component.html',
  styles: []
})
export class ClienteSearchComponent implements OnInit {

  public cliente = {
    id: '',
    cpf: '',
    nome: '',
    telefone: ''
  };

  public ClienteList: Cliente[] = [];
  colunas: string[] = ['cpf', 'nome', 'telefone','id'];

  constructor(private clienteService: ClienteService) { 
  
  }

  ngOnInit(): void { }

  listClientes(): void {
    this.clienteService.listTasks().subscribe(
      response => {
        console.log(response);
        this.ClienteList = response;
      },
      error => {
        console.log(error);
      });
  }

  getCliente(clienteId: string) {
    this.clienteService.getById(clienteId).subscribe(
      response => {
        console.log(response);
        this.ClienteList = response;
      },
      error => {
        console.log(error);
      });
  }

  deleteCliente(clienteId: string) {
    this.clienteService.deleteTasks(clienteId).subscribe(
      response => {
        console.log(response);
        this.listClientes();
      },
      error => {
        console.log(error);
      });
  }


  getClienteByCPF(cpf: string) {
    this.clienteService.getByCPF(cpf).subscribe(
      response => {
        console.log(response);
        this.ClienteList = response;
      },
      error => {
        console.log(error);
      });
  }

}

export interface Cliente {
  id: String,
  cpf: string,
  nome: string,
  telefone: string
}
