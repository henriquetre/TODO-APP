import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuardService } from "src/services/auth-guard.services";
import { TodoComponent } from "src/Categorias/todo.component";
import { InputComponent } from "./Tarefas/input.component";
import { LoginComponent } from "./login/login.component";
import { propriedadesComponent } from "./propriedades/propriedades.component";
import { CadastroComponent } from "src/cadastro/cadastro/cadastro.component";


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
        component: propriedadesComponent,
        canActivate: [AuthGuardService]
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent,

    },


    {
        path: '',
        redirectTo: 'cadastro',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class Apprountingmodule{

}