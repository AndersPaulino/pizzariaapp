import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "src/app/models/login/login";
import { Usuario } from "src/app/models/usuario/usuario";



@Injectable({
    providedIn: 'root'
})

export class LoginService{
    API: string = 'htpp://localhost:9090/api/login';
    http = inject(HttpClient);

    constructor(){}



  logar(login: Login): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, login);
  }

  deslogar(): Observable<any> {
    return this.http.get<any>(this.API+'/deslogar');
  }



  addToken(token: string){
    localStorage.setItem('token', token);
  }

  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}