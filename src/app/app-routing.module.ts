import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { SaqueComponentComponent } from './components/saque-component/saque-component.component';
import { DepositoComponentComponent } from './components/deposito-component/deposito-component.component';
import { TransferenciaComponentComponent } from './components/transferencia-component/transferencia-component.component';
import { ExtratoComponentComponent } from './components/extrato-component/extrato-component.component';
import { CadastroClienteComponentComponent } from './components/cadastro-cliente-component/cadastro-cliente-component.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'saque', component: SaqueComponentComponent },
  { path: 'deposito', component: DepositoComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'transferencia', component: TransferenciaComponentComponent },
  { path: 'extrato', component: ExtratoComponentComponent },
  { path: 'cadastro', component: CadastroClienteComponentComponent },
  {  path: '', redirectTo: '/home', pathMatch: 'full'}, 
  { path: '**', redirectTo: '/transferencia' },
  { path: '**', redirectTo: '/extrato' },
  { path: '**', redirectTo: '/deposito' },
  { path: '**', redirectTo: '/cadastro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
