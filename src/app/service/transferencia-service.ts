import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }

  transferencia(numeroContaSaque: string, numeroContaRecebe: string, numeroConta: string, valor: string, tipoTransacao: string) {
    const body = {
      numeroContaSaque: numeroContaSaque,  
      numeroContaRecebe: numeroContaRecebe,
      numeroConta: numeroConta,
      valor: valor,
      tipoTransacao: tipoTransacao
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080/transacao/transferencia', body, { headers: headers });
  }
}
