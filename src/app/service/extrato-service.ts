import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(private http: HttpClient) { }

  extrato(conta: string): Observable<any[]> {
    const body = { conta };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any[]>('http://localhost:8080/transacao/extrato', body, { headers });
  }
}
