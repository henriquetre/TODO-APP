import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { inputModule } from './Tarefas/input.module';
import { Apprountingmodule } from './app-rounting.module';
import { propriedadesModule } from './propriedades/propriedades.module';
import { UserRepository } from 'src/repositories/user.repository';
import { LoginModule } from './login/login.module';
import { AuthGuardService } from 'src/services/auth-guard.services';
import { TodoModule } from 'src/Categorias/todo.module';

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
    propriedadesModule,
    LoginModule
  ],
  providers: [
    UserRepository,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
