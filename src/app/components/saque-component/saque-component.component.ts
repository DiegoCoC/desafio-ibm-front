import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaqueService } from '../../service/saque-service';

@Component({
  selector: 'app-saque-component',
  templateUrl: './saque-component.component.html',
  styleUrl: './saque-component.component.css'
})
export class SaqueComponentComponent {
  constructor(private saqueService: SaqueService, private router: Router) { }

  onSubmit(numeroConta: string, valor: string, tipoTransacao: string) {
   this.saqueService.saque(numeroConta, valor, tipoTransacao).subscribe(
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
