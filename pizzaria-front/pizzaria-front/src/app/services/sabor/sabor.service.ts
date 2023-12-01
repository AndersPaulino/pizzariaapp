import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabor } from 'src/app/models/sabor/sabor';

@Injectable({
  providedIn: 'root'
})

export class SaborService {
  API: string = '/api/sabor';
  
  constructor(private http: HttpClient) {}

  listAll(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API);
  }

  cadastrarSabor(sabor: Sabor): Observable<string> {
    return this.http.post(this.API, sabor, { responseType: 'text' });
  }

  atualizarSabor(id: number, sabor: Sabor): Observable<string> {
    return this.http.put(`${this.API}/${id}`, sabor, { responseType: 'text' });
  }

  deletarSabor(id: number): Observable<string> {
    return this.http.delete(`${this.API}/deletar/${id}`, { responseType: 'text' });
  }

  exemploErro(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API + '/erro');
  }
}