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
  usarios: Pessoa[]= [];

  pessoa: Pessoa= {
    nome: ''
  }

  
  
}
