import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login/login';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: Usuario = new Usuario();
  login: Login = new Login();
  roteador = inject(Router);
  
  constructor() {
    
  }

  logar() {
    if (this.usuario.login == 'admin' && this.usuario.senha == 'admin')
      this.roteador.navigate(['admin/bebida']);
    else
      alert('Login ou senha incorretos!');
  }

}