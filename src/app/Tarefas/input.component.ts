import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { User } from "src/models/users/users";
import { UserRepository } from "src/repositories/user.repository";




interface Tarefa{
    Descricao: string;
    Categoria: string;
    Propriedade: Propriedade[];
}

interface Propriedade {
  nome: string;
  selecao: string;
  emEdicao:boolean;
}

@Component({
    selector: 'cadastro',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']



})

export class InputComponent implements OnInit{

  constructor(private userRepository: UserRepository){
    userRepository.getUsers().subscribe({
      next:(value)=>{
        console.log(value);
        this.users=value;
        this.user= this.getUsuarioLogado(); 
      }
    });

    
   console.log(this.user);
  }

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
    
    const lista2: Propriedade[] = JSON.parse(localStorage.getItem('listaPropriedade'));
    this.tarefa.Categoria=""
    if (lista2 != null) {
      
      
      this.listaPropriedade= lista2;
      console.log(lista2);

    } 

    const printDosInputs: string []= JSON.parse(localStorage.getItem('valorDigitado'));

    if (printDosInputs != null) {
      
      
      this.valorCampos= printDosInputs;
      console.log(lista2);

    } 
  }


  listaPropriedade:Propriedade []=[];
  categoria: String;
    @Output() click = new EventEmitter<Tarefa>();

    valorCampos: string [];

    tarefa: Tarefa = {
      Descricao: "",
      Categoria: "",
      Propriedade: [] 
    };

    listaTarefas: Tarefa[]=[];
    listaCategoria: String[]=[];
  
    variavelBoolean: boolean;
    variavelBooleanRemove: boolean;

    adicionarTarefa(): void{
      console.log(this.userId)
      console.log(this.tarefa.Propriedade)
      
      // if (!this.hasPermission('add')) {
      //   alert('Não pode cadastrar');
      
      
        // this.variavelBoolean=true
        // }else{
          // this.variavelBoolean=false;
          const novaTarefa: Tarefa = {
            Descricao: this.tarefa.Descricao,
            Categoria: this.tarefa.Categoria,
            Propriedade: this.tarefa.Propriedade
          
          };

          if(this.tarefa.Categoria==""){
          novaTarefa.Categoria="Sem categoria" 
          
          }
          
            this.listaTarefas.push(novaTarefa);
            localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
            this.tarefa.Descricao="";
          
        // }
    
        }
         
          
    


    excluirTarefa(tarefa: Tarefa): void {
      const index = this.listaTarefas.indexOf(tarefa);
      if (!this.hasPermission('Remove')) {
        alert('Não pode Remover');
        this.variavelBooleanRemove=true;
      
    }else{
      if (index !== -1) {
        this.listaTarefas.splice(index, 1);
        console.log(this.listaTarefas)
        this.variavelBooleanRemove=false
      }
      localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas))  
    }

    }

    atualizarLocalStorage():void{
      console.log('entrei');
      localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas))
    }

    categoriaNova: string
    posicao: number
    dragover(categoria: string){
    
     this.categoriaNova=categoria; 
    
    }

    dragEnd(tarefa: Tarefa){
      if (!this.hasPermission('moveCard')) {
        alert('Não pode Mover');
      
    }else{
      tarefa.Categoria= this.categoriaNova;
      localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));  
      this.mudaPosicao(tarefa);
    }

    }

    mudaPosicao(tarefa:Tarefa){

      
      const index = this.listaTarefas.indexOf(tarefa);

      const elementoRemovido = this.listaTarefas.splice(index, 1)[0];

      this.listaTarefas.splice(this.posicao,0,elementoRemovido);
    

    
  }

    pegaposicao(tarefa : Tarefa){
     this.posicao= this.listaTarefas.indexOf(tarefa);
    }


    private userId: string= 'henrique.silva';
    private users: User []= [];

  user: User ={
    id: "",
    name:"",
    email:"",
    senha:"",
   
    groups:[],
    cardPermissions:[],
    propertiesPermissions: [],

  }
  
  

 

 
  private hasPermission(permission: string): boolean{
    return this.user.cardPermissions.some((cardPermissions)=>{
      return cardPermissions === permission
    })
  }
  

  // editarTarefa(): void {
  //   if (!this.hasPermission('Edit')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  
  
  private getUsuarioLogado(): User{
    return this.users.find((user)=> {
      return user.id === this.userId
    })
  }
  
  // salvaEscrito(propriedade:Propriedade){
  //   localStorage.setItem('valorDigitado', JSON.stringify(propriedade.v))
  // }


}

  
  
     

