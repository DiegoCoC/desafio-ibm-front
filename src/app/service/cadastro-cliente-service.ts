import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../components/cadastro-cliente-component/cadastro-cliente-component.component';

@Injectable({
  providedIn: 'root'
})
export class CastroClienteService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/cliente/';

  cadastro(nome: string, idade: string, endereco: string, email: string, tipoConta: string): Observable<Cliente> { // Ajustado para Cliente, não é necessário um array
    const body = {
      nome,
      idade: parseInt(idade, 10),
      endereco,
      email,
      numero: {
        tipoConta,
        numeroConta: '',  
        saldo: 0.0
      }
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Cliente>(this.apiUrl, body, { headers }); // Ajustado para Cliente, não é necessário um array
  }
}
