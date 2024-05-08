import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    FooterComponent,
    HeaderComponent,
    MensagemComponent,
    SucessoCadastroComponent
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
