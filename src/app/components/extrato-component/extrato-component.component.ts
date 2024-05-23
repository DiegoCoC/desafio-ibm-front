import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExtratoService } from '../../service/extrato-service';

@Component({
  selector: 'app-extrato-component',
  templateUrl: './extrato-component.component.html',
  styleUrl: './extrato-component.component.css'
})
export class ExtratoComponentComponent {
  constructor(private transferenciaService: ExtratoService, private router: Router) { }

  onSubmit(conta: string) {
   this.transferenciaService.extrato(conta).subscribe(
     response => {
       console.log('Extrato successful');
       this.router.navigate(['/home']);
     },
     error => {
       console.error('Extrato failed', error);
       this.router.navigate(['/home']);
     }
   );
 }
}
