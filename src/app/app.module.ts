import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { inputModule } from './input/input.module';
import { Apprountingmodule } from './app-rounting.module';
import { TodoModule } from 'src/todo/todo.module';
import { propriedadesModule } from './propriedades/propriedades.module';
import { UserRepository } from 'src/repositories/user.repository';

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
  providers: [
    UserRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
