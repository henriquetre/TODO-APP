import { Component, Output, EventEmitter, OnInit } from "@angular/core";



interface Tarefa{
    Descricao: string;
    Categoria: string;
    editando:  false;
}

@Component({
    selector: 'cadastro',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']



})
export class InputComponent implements OnInit{
  ngOnInit() {
    const lista1: Tarefa[] = JSON.parse(localStorage.getItem('listaTodo'));
    const lista2: Tarefa[] = JSON.parse(localStorage.getItem('listaDone'));
    const lista3: Tarefa[] = JSON.parse(localStorage.getItem('listaDoing'));
    if (lista1 != null) {
      this.listaTodo = lista1;
      console.log(lista1);
    }
    if (lista2 != null) {
      this.listaDone = lista2;
      console.log(lista2);
    }
    if (lista3 != null) {
      this.listaDoing = lista3;
      console.log(lista3);
    }
  }
  

    @Output() click = new EventEmitter<Tarefa>();

    tarefa: Tarefa = {
      Descricao: "",
      Categoria: "",
      editando: false
    };

    listaTarefas: Tarefa[]=[];

    listaTodo: Tarefa[]=[];
    listaDone: Tarefa[]=[];
    listaDoing: Tarefa[]=[];

    tarefaAtual: Tarefa = null;

  

    adicionarTarefa(): void{
        this.click.emit(this.tarefa);
        console.log(this.listaDone)
        console.log(this.listaTodo)
        console.log(this.listaDoing)
        const novaTarefa: Tarefa = {
            Descricao: this.tarefa.Descricao,
            Categoria: this.tarefa.Categoria,
            editando:this.tarefa.editando
          };
      

        if(this.tarefa.Categoria==="TODO"){
          this.listaTodo.push(novaTarefa);
        }
        if(this.tarefa.Categoria==="DONE"){
          this.listaDone.push(novaTarefa);
        }
        if(this.tarefa.Categoria==="DOING"){
          this.listaDoing.push(novaTarefa);
          console.log(this.listaDoing)
        }
        
        localStorage.setItem('listaTodo', JSON.stringify(this.listaTodo));
        localStorage.setItem('listaDone', JSON.stringify(this.listaDone));
        localStorage.setItem('listaDoing', JSON.stringify(this.listaDoing));
        this.tarefa.Descricao="";
    

    }

   
    excluirTarefa(tarefa: Tarefa): void {
      const index = this.listaTodo.indexOf(tarefa);
      const index1 = this.listaDoing.indexOf(tarefa);
      const index2 = this.listaDone.indexOf(tarefa);
      if (index !== -1) {
        this.listaTodo.splice(index, 1);
      }
      if(index1!==-1){
        this.listaDoing.splice(index1,1);
      }
      if(index2!==-1){
        this.listaDone.splice(index2,1);
      }
      
      localStorage.setItem('listaTodo', JSON.stringify(this.listaTodo));
        localStorage.setItem('listaDone', JSON.stringify(this.listaDone));
        localStorage.setItem('listaDoing', JSON.stringify(this.listaDoing));
     
    }
    editarTarefa(tarefaAux) {
    this.tarefa.Descricao=tarefaAux.Descricao
    this.tarefa.Categoria=tarefaAux.Categoria
    this.excluirTarefa(tarefaAux)
    }
  
    salvarTarefa(tarefa) {
      tarefa.editando = false;
      localStorage.setItem('listaTodo', JSON.stringify(this.listaTodo));
        localStorage.setItem('listaDone', JSON.stringify(this.listaDone));
        localStorage.setItem('listaDoing', JSON.stringify(this.listaDoing));
    }
  }
  
     

