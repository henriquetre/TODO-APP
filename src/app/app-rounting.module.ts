import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuardService } from "src/services/auth-guard.services";
import { TodoComponent } from "src/todo/todo.component";
import { InputComponent } from "./input/input.component";
import { LoginComponent } from "./login/login.component";
import { propriedadesComponent } from "./propriedades/propriedades.component";


const rotas: Route[]= [
    {
        path: 'categoria',
        component: TodoComponent
    },
    {
        path: 'Tarefas',
        component: InputComponent,
        canActivate: [AuthGuardService]
    },
    {
        path : 'propriedades',
        component: propriedadesComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },


    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class Apprountingmodule{

}