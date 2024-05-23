import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaqueService } from '../../service/saque-service';

@Component({
  selector: 'app-saque-component',
  templateUrl: './saque-component.component.html',
  styleUrl: './saque-component.component.css'
})
export class SaqueComponentComponent {
  constructor(private saqueService: SaqueService, private router: Router) {}

  onSubmit(numeroConta: string, valor: string) {
    this.saqueService.saque(numeroConta, valor, 'Saque').subscribe(
      response => {
        console.log('Saque successful');
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Saque failed', error);
        this.router.navigate(['/home']);
      }
    );
  }

  cancelarSaque() {
    alert("Operação cancelada!");
    this.router.navigate(['/home']);
  }
}
