import { Injectable } from '@angular/core';
import { User } from 'src/models/users/users';

@Injectable()
export class CookieService {

  constructor() { }

  public setCookie(user:User) {
    document.cookie =`UsuarioLogado=${JSON.stringify(user)};`;
  }

  getLoggedUser(): User {
    const cookieValue = this.getCookieValue("UsuarioLogado");
    if (cookieValue) {
      return JSON.parse(cookieValue);
    }
    return null;
  }

  private getCookieValue(name: string): string | null {
    const cookies = document.cookie.split(";").map(cookie => cookie.trim());
    for (const cookie of cookies) {
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

}