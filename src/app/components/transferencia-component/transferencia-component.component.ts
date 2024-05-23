import { Component } from '@angular/core';
import { TransferenciaService } from '../../service/transferencia-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia-component',
  templateUrl: './transferencia-component.component.html',
  styleUrl: './transferencia-component.component.css'
})
export class TransferenciaComponentComponent {
  constructor(private transferenciaService: TransferenciaService, private router: Router) { }

  onSubmit(numeroContaSaque: string, numeroContaRecebe: string, valor: string) {
   this.transferenciaService.transferencia(numeroContaSaque, numeroContaRecebe, valor, 'Tranferência').subscribe(
     response => {
       console.log('Tranferência successful');
       this.router.navigate(['/home']);
     },
     error => {
       console.error('Tranferência failed', error);
       this.router.navigate(['/home']);
     }
   );
 }

  cancelarTransferencia() {
    alert("Operação cancelada!");
    this.router.navigate(['/home']);
  }
}
