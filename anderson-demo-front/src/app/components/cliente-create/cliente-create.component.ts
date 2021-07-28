import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styles: []
})
export class ClienteCreateComponent implements OnInit {

  public cliente = {
    cpf: '',
    nome: '',
    telefone: ''
  };

  public ClienteList: Cliente[] = [];
  colunas: string[] = ['cpf', 'nome', 'telefone','id'];

  constructor(private clienteService: ClienteService) { 
   
  }

  ngOnInit(): void { }

  createCliente(): void {
    const data = {
      cpf: this.cliente.cpf,
      nome: this.cliente.nome,
      telefone: this.cliente.telefone
    };

    this.clienteService.create(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  newCliente(): void {
    this.cliente = {
      cpf: '',
      nome: '',
      telefone: ''
    };
  }
}

export interface Cliente {
  cpf: string,
  nome: string,
  telefone: string
}
