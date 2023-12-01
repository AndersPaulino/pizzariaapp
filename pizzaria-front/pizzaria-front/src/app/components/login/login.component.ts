import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = new Login();
  roteador = inject(Router);
  loginService = inject(LoginService);

  constructor() {
    this.loginService.removerToken();
  }

  logar() {


    this.loginService.logar(this.login).subscribe({
      next: usuario => { // QUANDO DÁ CERTO
        console.log(usuario);
        this.loginService.addToken(usuario?.token);
        this.roteador.navigate(['admin']);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

    if (this.login.username == 'admin' && this.login.password == 'admin')
      this.roteador.navigate(['admin']);
    else
      alert('login ou senha incorretos');

  } 

 /*logar() {
    if (this.login.username == 'admin' && this.login.password == 'admin')
      this.roteador.navigate(['admin/bebida']);
    else
      alert('Login ou senha incorretos!');
  }*/

  
}