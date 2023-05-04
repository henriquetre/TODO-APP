import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { T } from "@angular/core/src/render3";
import { forEach } from "@angular/router/src/utils/collection";


interface Tarefa{
    Descricao: string;
}

@Component({
    selector: 'cadastro',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']



})
export class InputComponent implements OnInit{
  ngOnInit() {
    const lista: Tarefa[] = JSON.parse(localStorage.getItem('listaTarefas'));
    if (lista != null) {
      this.listaTarefas = lista;
      console.log(lista);
    }
  }
  

    @Output() click = new EventEmitter<Tarefa>();

    tarefa: Tarefa = {
      Descricao: ""
    };

    listaTarefas: Tarefa[]=[];

    tarefaAtual: Tarefa = null;

  

    adicionarTarefa(): void{
        this.click.emit(this.tarefa);

        const novaTarefa: Tarefa = {
            Descricao: this.tarefa.Descricao
          };
          this.listaTarefas.push(novaTarefa);
        console.log(this.listaTarefas)

        localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
        this.tarefa.Descricao="";
    

    }

   
    excluirTarefa(tarefa: Tarefa): void {
      const index = this.listaTarefas.indexOf(tarefa);
      if (index !== -1) {
        this.listaTarefas.splice(index, 1);
        
      }
      
      localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
      localStorage.removeItem(this.tarefa.Descricao);
    }
}
     

