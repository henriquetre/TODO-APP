import { Component } from '@angular/core';

interface Pessoa{
  nome: ''
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'todo-app';
  nome:string ='Henrique';

  usarios: Pessoa[]= [];

  pessoa: Pessoa= {
    nome: ''
  }
  mostraInput:boolean= true;

  

  esconderInput(): void{
    this.mostraInput=false;
  }

  mostrarInput(): void{
    this.mostraInput=true;

  }
  cadastrarUsuario(): void{

    const usario: Pessoa ={
      nome: this.pessoa.nome
    }
    this.usarios.push(this.pessoa)
    console.log(this.usarios)
  }
}
