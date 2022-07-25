import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class UserService{

constructor(private httpClient:HttpClient){}

path = "http://localhost:5025/api/";

add(user:User){
    this.httpClient.post(this.path + 'Users/add', user).subscribe();
}

getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.path+"Users/get")
}

}