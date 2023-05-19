import { Component, OnInit } from "@angular/core";


interface Categoria{
  Nome: string;
  Cor: string;
}


@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit{
    
    ngOnInit() {
const lista1: Categoria[] = JSON.parse(localStorage.getItem('listaCategoria'));
    if (lista1 != null) {
      this.listaCategoria = lista1;
      console.log(lista1);
    } 
  


    }
    categoria: Categoria = {
      Nome: "",
      Cor: "",
    };

    listaCategoria: Categoria[]=[];

    atualizarLocalStorage():void{
        console.log('entrei');
        localStorage.setItem('listaTarefas', JSON.stringify(this.listaCategoria))
      }
  
      adcionarCategoria(): void{
        const NovaCategoria: Categoria = {
          Nome: this.categoria.Nome,
          Cor: this.categoria.Cor
        };
        if(NovaCategoria.Nome==""){
          alert("Insira um nome para a Categoria")
        }else{
          console.log(NovaCategoria)
          this.listaCategoria.push(NovaCategoria)
          localStorage.setItem('listaCategoria', JSON.stringify(this.listaCategoria));
          this.categoria.Nome="";
        }
       
       
       
  
      }


      excluirCategoria(categoria:Categoria): void {
        const index = this.listaCategoria.indexOf(categoria);
  
        if (index !== -1) {
          this.listaCategoria.splice(index, 1);
        }
        localStorage.setItem('listaCategoria', JSON.stringify(this.listaCategoria))    
      }
    
}