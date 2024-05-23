import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExtratoService } from '../../service/extrato-service';

interface Transacao {
  nome: string;
  tipoConta: string;
  numeroConta: string;
  saldo: number;
  transacao: string;
  valor: number;
  data: string;
}

@Component({
  selector: 'app-extrato-component',
  templateUrl: './extrato-component.component.html',
  styleUrl: './extrato-component.component.css'
})
export class ExtratoComponentComponent {

  extratoList: Transacao[] = [];
  showExtrato: boolean = false;

  constructor(private transferenciaService: ExtratoService, private router: Router) { }

  onSubmit(conta: string) {
    this.transferenciaService.extrato(conta).subscribe(
      (response: Transacao[]) => {
        console.log('Extrato successful');
        this.extratoList = response;
        this.showExtrato = true; 
        alert('Extrato obtido com sucesso!');
      },
      error => {
        console.error('Extrato failed', error);
        this.router.navigate(['/home']);
      }
    );
  }
}
