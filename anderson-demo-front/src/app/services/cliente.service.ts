import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// URL do spring
const baseURL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  // cria um novo cliente
  create(data: any): Observable<any> {
    return this.httpClient.post(`${baseURL}/postCliente`, data);
  }

  // busca um cliente pelo ID
  getById(id: string): Observable<any> {
    return this.httpClient.get(`${baseURL}/getCliente/${id}`);
  }

    // busca um cliente pelo CPF
    getByCPF(cpf: string): Observable<any> {
      return this.httpClient.get(`${baseURL}/getClienteByCPF/${cpf}`);
    }

  // busca todos os clientes
  listTasks(): Observable<any> {
    return this.httpClient.get(`${baseURL}/listClientes`);
  }

  // apaga um cliente pelo ID
  deleteTasks(id: string): Observable<any> {
    return this.httpClient.delete(`${baseURL}/deleteCliente/${id}`);
  }
}