import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {

  constructor(private http: HttpClient) { }

  saque(numeroConta: string, valor: string, tipoTransacao: string) {
    const body = {
      numeroConta: numeroConta,
      valor: valor,
      tipoTransacao: tipoTransacao
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080/transacao/saque', body, { headers: headers });
  }
}
