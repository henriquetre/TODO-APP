import { Component, OnInit } from "@angular/core";

interface Tarefa{
    Descricao: string;
    Categoria: string;
}


@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit{
    
    ngOnInit() {
const lista1: String[] = JSON.parse(localStorage.getItem('listaCategoria'));
    if (lista1 != null) {
      this.listaCategoria = lista1;
      console.log(lista1);
    } 
    const lista: Tarefa[] = JSON.parse(localStorage.getItem('listaTarefas'));
    if (lista != null) {
      this.listaTarefas = lista;
      console.log(lista);
    }


    }
    categoria: String;

    listaTarefas:Tarefa[];
    listaCategoria: String[]=[];

    atualizarLocalStorage():void{
        console.log('entrei');
        localStorage.setItem('listaTarefas', JSON.stringify(this.listaCategoria))
      }
  
      adcionarCategoria(categoria:String ): void{
        let NovaCategoria=categoria;
        if(categoria==null || categoria==""){
          alert("Insira um nome para a Categoria")
        }else{
          console.log(categoria)
          this.listaCategoria.push(NovaCategoria)
          localStorage.setItem('listaCategoria', JSON.stringify(this.listaCategoria));
          categoria==null;
          categoria=="";
        }
       
       
       
  
      }


      excluirCategoria(categoria: String): void {
        const index = this.listaCategoria.indexOf(categoria);
  
        if (index !== -1) {
          this.listaCategoria.splice(index, 1);
        }
        localStorage.setItem('listaCategoria', JSON.stringify(this.listaCategoria))    
      }
    
}