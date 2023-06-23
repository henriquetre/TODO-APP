import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class testeServices{

    tema = Subject
    cor= new BehaviorSubject('Preto'); 

    getTema(values: string): Observable<string>{
        return this.tema.next(value);
    }

}