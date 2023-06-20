import { Component } from '@angular/core';
import { UserRepository } from 'src/repositories/user.repository';
import {User} from "src/models/users/users";

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
  private userId: string= 'henrique.silva';
  private users: User []= [];
  user : User | undefined;

  constructor(private userRepository: UserRepository){
    this.users = this.userRepository.getUsers();
    this.getUsuarioLogado();
  }
  
  private getUsuarioLogado(): User{
    return this.users.find((user)=> {
      return user.id === this.userId
    })
  }

  usarios: Pessoa[]= [];

  pessoa: Pessoa= {
    nome: ''
  }
  mostraInput:boolean= true;
  cadastrarUsuario(): void{

    const usario: Pessoa ={
      nome: this.pessoa.nome
    }
    this.usarios.push(this.pessoa)
    console.log(this.usarios)
  }
  private hasPermission(permission: string): boolean{
    return this.user.propertiesPermissions.some((propertiesPermissions)=>{
      return propertiesPermissions === permission
    })
  }
}
