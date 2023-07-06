import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { CookieService } from "./cookies.services";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private cookieServices: CookieService,
        private router: Router
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(this.cookieServices.getLoggedUser()){
            return true;

        }else{
            this.router.navigate(['/login'])
            return false;   
        }
                
    }

}