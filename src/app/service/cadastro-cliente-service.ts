import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CastroClienteService {

  constructor(private http: HttpClient) { }

  cadastro(nome: string, idade: string, endereco: string, email: string, tipoConta: string) {
    const body = {
      nome: nome,
      idade: idade,
      endereco: endereco,
      email: email,
      tipoConta: tipoConta
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080//cliente/', body, { headers: headers });
  }
}
