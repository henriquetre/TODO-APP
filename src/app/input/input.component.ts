import { Component, Output, EventEmitter, OnInit } from "@angular/core";



interface Tarefa{
    Descricao: string;
    Categoria: string;
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

    const lista1: String[] = JSON.parse(localStorage.getItem('listaCategoria'));
    if (lista1 != null) {
      this.listaCategoria = lista1;
      console.log(lista1);
    } 
  
  }



  categoria: String;
    @Output() click = new EventEmitter<Tarefa>();

    tarefa: Tarefa = {
      Descricao: "",
      Categoria: "",
    };

    listaTarefas: Tarefa[]=[];
    listaCategoria: String[]=[];

    adicionarTarefa(): void{
        const novaTarefa: Tarefa = {
            Descricao: this.tarefa.Descricao,
            Categoria: this.tarefa.Categoria,
          };
          console.log(novaTarefa)
          if(this.tarefa.Categoria==""){
            alert("Insira uma Categoria" )
          
          }else{
            this.listaTarefas.push(novaTarefa);
            localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
            this.tarefa.Descricao="";
          }
          
    
    }

    excluirTarefa(tarefa: Tarefa): void {
      const index = this.listaTarefas.indexOf(tarefa);

      if (index !== -1) {
        this.listaTarefas.splice(index, 1);
        console.log(this.listaTarefas)
      }
      localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas))    
    }
    atualizarLocalStorage():void{
      console.log('entrei');
      localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas))
    }

  
  }
  
     

