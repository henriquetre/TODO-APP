import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { inputModule } from "src/app/input/input.module";
import { TodoComponent } from "./todo.component";


@NgModule({
    declarations: [
        TodoComponent,

      ],
      imports:[
        CommonModule,
        inputModule,
        FormsModule
      ],
      exports:[
        TodoComponent,

      ] 
})
export class TodoModule{ }