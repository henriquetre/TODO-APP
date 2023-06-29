import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/models/users/users";
import  {user} from '../data/user'
import { Observable} from "rxjs";
import {map} from "rxjs/operators";
const  API_URL= 'http://localhost:4300'
@Injectable()
export class UserRepository{
   
    constructor(
       
        private httpClient: HttpClient
    ){}

    getUsers(): Observable <User []> {
        return this.httpClient.get<User[]>(`${API_URL}/usuarios`).pipe
        (map(values => {
            const users: User [] =[];
            for(const value of values){
                users.push(Object.assign(new User(), value))
            }
            return users;
        }))
        
    }

}