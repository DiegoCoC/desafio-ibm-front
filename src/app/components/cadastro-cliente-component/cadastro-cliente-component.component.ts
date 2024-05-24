import { Component } from '@angular/core';
import { CastroClienteService } from '../../service/cadastro-cliente-service';
import { Router } from '@angular/router';

export interface Cliente {
  id: string;
  nome: string;
  idade: number;
  endereco: string;
  email: string;
  numero: Conta;
}

export interface Conta {
  id: string;
  tipoConta: string;
  numeroConta: string;
  saldo: number;
}


@Component({
  selector: 'app-cadastro-cliente-component',
  templateUrl: './cadastro-cliente-component.component.html',
  styleUrl: './cadastro-cliente-component.component.css'
})
export class CadastroClienteComponentComponent {

  conta: Cliente | null = null;
  showConta: boolean = false;
  showTable: boolean = false;

  constructor(private cadastroClienteService: CastroClienteService, private router: Router) { }

  onSubmit(nome: string, idade: string, endereco: string, email: string, tipoConta: string) {
    this.cadastroClienteService.cadastro(nome, idade, endereco, email, tipoConta).subscribe(
      (response: Cliente) => { // Ajustado para Cliente, não é necessário um array
        console.log('Conta criada com sucesso!');
        console.log(this.conta);
        this.conta = response;
        this.showConta = true;
        this.showTable = true; 
      },
      error => {
        console.error('Falha ao criar a conta', error);
        this.router.navigate(['/home']);
      }
    );
  }

  cancelarCadastro() {
    alert("Operação cancelada!");
    this.router.navigate(['/home']);
  }

  voltarCadastro() {
    this.router.navigate(['/home']);
  }

}
