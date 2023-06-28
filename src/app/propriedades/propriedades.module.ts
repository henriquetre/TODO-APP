import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { propriedadesComponent } from "./propriedades.component";
import { TodoModule } from "src/Categorias/todo.module";

@NgModule({
    declarations:[
        propriedadesComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        TodoModule
    ],
    exports:[
        propriedadesComponent
    ]
})
export class propriedadesModule{

}