import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { MaiorIdadeDirective } from './directives/maior-idade.directive';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    FooterComponent,
    HeaderComponent,
    MensagemComponent,
    SucessoCadastroComponent,
    MaiorIdadeDirective
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
