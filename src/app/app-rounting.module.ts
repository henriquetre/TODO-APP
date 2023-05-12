import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TodoComponent } from "src/todo/todo.component";
import { InputComponent } from "./input/input.component";

const rotas: Route[]= [
    {
        path: 'categoria',
        component: TodoComponent
    },
    {
        path: 'Tarefas',
        component: InputComponent
    },
    {
        path: '',
        redirectTo: 'categoria',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class Apprountingmodule{

}