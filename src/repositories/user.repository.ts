import { Injectable } from "@angular/core";
import { User } from "src/models/users/users";
import  {user} from '../data/user'
@Injectable()
export class UserRepository{

    getUsers(): User [] {

        return user;

    }

}