import { NgModule } from "@angular/core";
import { InputComponent } from "./input.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations:[
        InputComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule
       ],
    exports:[
        InputComponent
    ]


})
export class inputModule{

}