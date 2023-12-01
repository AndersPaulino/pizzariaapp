import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/models/endereco/endereco';

@Injectable({
  providedIn: 'root'
})

export class EnderecoService {
  API: string = '/api/endereco';
 
  constructor(private http: HttpClient) {}

  listAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.API);
  }

  cadastrarEndereco(endereco: Endereco): Observable<string> {
    return this.http.post(this.API, endereco, { responseType: 'text' });
  }

  atualizarEndereco(id: number, endereco: Endereco): Observable<string> {
    return this.http.put(`${this.API}/${id}`, endereco, { responseType: 'text' });
  }

  deletarEndereco(id: number): Observable<string> {
    return this.http.delete(`${this.API}/deletar/${id}`, { responseType: 'text' });
  }

  exemploErro(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.API + '/erro');
  }
}