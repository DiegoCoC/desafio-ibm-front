import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(private http: HttpClient) { }

  extrato(conta: string) {
    const body = {
      conta: conta
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080/transacao/extrato', body, { headers: headers });
  }
}
