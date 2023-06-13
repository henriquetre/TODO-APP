import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { propriedadesComponent } from "./propriedades.component";

@NgModule({
    declarations:[
        propriedadesComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        propriedadesComponent
    ]
})
export class propriedadesModule{

}