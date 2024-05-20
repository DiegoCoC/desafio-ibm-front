import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = {
      login: username,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080/auth/login', body, { headers: headers });
  }
}
