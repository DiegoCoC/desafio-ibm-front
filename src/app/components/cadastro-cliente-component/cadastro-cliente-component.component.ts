import { Component } from '@angular/core';
import { CastroClienteService } from '../../service/cadastro-cliente-service';

@Component({
  selector: 'app-cadastro-cliente-component',
  templateUrl: './cadastro-cliente-component.component.html',
  styleUrl: './cadastro-cliente-component.component.css'
})
export class CadastroClienteComponentComponent {
  constructor(private cadastroClienteService: CastroClienteService) { }

  onSubmit(nome: string, idade: string, endereco: string, email: string, tipoConta: string) {
    console.log("TESTEEEEEEEEEEEEEEEEEEEEEEEE");
    this.cadastroClienteService.cadastro(nome, idade, endereco, email, tipoConta).subscribe(response => {

    }, error => {

    });
  }

}
