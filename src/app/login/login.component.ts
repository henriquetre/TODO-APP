import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from 'src/models/users/users';
import { UserRepository } from 'src/repositories/user.repository';
import { CookieService } from 'src/services/cookies.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private apiServices:UserRepository,
    private cookieServices: CookieService
    ) { }

  ngOnInit() {
    
  }
listaUsuarios: User[]=[];
idUsuario:string;

  login(id:string):string{
    
    this.apiServices.getUsers().subscribe(
      (user) =>{

        for (const i of user) {
          if(i.id==this.idUsuario){
            alert("O usuario: "+ id+" entrou")
           this.cookieServices.setCookie(i);

            this.router.navigate(['/Tarefas']);
          }
        }
        console.log(user);
      },
      (error) =>{
        console.log(error);
      }
    );

   
    return id;
    


  }
  mudarRota(){
    this.router.navigate(['/cadastro'])
  }



}
