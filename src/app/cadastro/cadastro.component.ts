import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private consultaCepService: ConsultaCepService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    console.log(form);

    if (form.valid) {
      this.router.navigate(['./sucesso']);
    } else {
      alert('Formulário inválido!');
    }
  }

  consultaCEP(ev: any) {
    const cep = ev.target.value;
    return this.consultaCepService.getConsultaCep(cep)
      .subscribe(resultado => console.log(resultado))
  }
}
