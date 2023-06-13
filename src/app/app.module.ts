import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { inputModule } from './input/input.module';
import { Apprountingmodule } from './app-rounting.module';
import { TodoModule } from 'src/todo/todo.module';
import { propriedadesModule } from './propriedades/propriedades.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    inputModule,
    Apprountingmodule,
    TodoModule,
    propriedadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
