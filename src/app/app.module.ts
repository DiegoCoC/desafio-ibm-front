import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CadastroClienteComponentComponent } from './components/cadastro-cliente-component/cadastro-cliente-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { DepositoComponentComponent } from './components/deposito-component/deposito-component.component';
import { SaqueComponentComponent } from './components/saque-component/saque-component.component';
import { TransferenciaComponentComponent } from './components/transferencia-component/transferencia-component.component';
import { ExtratoComponentComponent } from './components/extrato-component/extrato-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    CadastroClienteComponentComponent,
    HomeComponentComponent,
    DepositoComponentComponent,
    SaqueComponentComponent,
    TransferenciaComponentComponent,
    ExtratoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
