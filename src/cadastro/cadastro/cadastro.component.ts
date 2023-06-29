import { Component, OnInit } from '@angular/core';
import { NOMEM } from 'dns';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
nome:string;
email:string;
senha:string;

  cadastrar(nome:string, email:string, senha:string ):string{
    console.log(nome,email,senha)
    return nome;

  }

}
