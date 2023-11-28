import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario/funcionario';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {
  API: string = 'http://localhost:9090/api/funcionario';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API);
  }

  cadastrarFuncionario(funcionario: Funcionario): Observable<string> {
    return this.http.post(this.API, funcionario, { responseType: 'text' });
  }

  atualizarFuncionario(id: number, funcionario: Funcionario): Observable<string> {
    return this.http.put(`${this.API}/${id}`, funcionario, { responseType: 'text' });
  }

  deletarFuncionario(id: number): Observable<string> {
    return this.http.delete(`${this.API}/deletar/${id}`, { responseType: 'text' });
  }

  exemploErro(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API + '/erro');
  }
}