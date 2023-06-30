import { Component, OnInit } from '@angular/core';
import { s } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { User } from 'src/models/users/users';
import { UserRepository } from 'src/repositories/user.repository';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router,
    private apiServices: UserRepository) {

  }

  ngOnInit() {
  }
  userNome: string
  userEmail: string
  userSenha: string
  userName: string

  user: User = {
    id: "",
    name: "",
    senha: "",
    email: "",
    groups: [],
    cardPermissions: [],
    propertiesPermissions: [],
  }

  cadastrar(userNome: string, userEmail: string, userSenha: string, userName: string): string {
    const userNovo: User = {
      id: userName,
      name: userNome,
      email: userEmail,
      senha: userSenha,
    }



    this.apiServices.createUsers(userNovo).subscribe(
      (userNovo) => {
        console.log("Usuario adcionado: " + userNovo)
        this.router.navigate(['/login'])

      }, (error) => {
        console.log(error);
      }
    )
    return userName;
  }

}
