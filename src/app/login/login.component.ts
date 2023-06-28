import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
idUsuario:string;

  login(id:string):string{
    alert("O ussuario: "+ id+" entrou")
    this.router.navigate(['/Tarefas']);
    return id;
    


  }



}
