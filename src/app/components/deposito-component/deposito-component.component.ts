import { Component } from '@angular/core';
import { DepositoService } from '../../service/deposito-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposito-component',
  templateUrl: './deposito-component.component.html',
  styleUrl: './deposito-component.component.css'
})
export class DepositoComponentComponent {
  constructor(private depositoService: DepositoService, private router: Router) { }

  onSubmit(numeroConta: string, valor: string, tipoTransacao: string) {
   this.depositoService.deposito(numeroConta, valor, tipoTransacao).subscribe(
     response => {
       console.log('Login successful');
       this.router.navigate(['/home']);
     },
     error => {
       console.error('Login failed', error);
       this.router.navigate(['/home']);
     }
   );
 }

}
