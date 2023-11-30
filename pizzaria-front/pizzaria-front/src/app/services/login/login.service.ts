import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "src/app/models/login/login";



@Injectable({
    providedIn: 'root'
})

export class LoginService{
    API: string = 'htpp://localhost:9090/api/login';

    constructor(private http: HttpClient){}

    logar(login: Login): Observable<string>{
        return this.http.post(this.API, login, {responseType: 'text'});
    }
    logout(){
        return this.http.get(this.API + '/deslogar');
    }
}