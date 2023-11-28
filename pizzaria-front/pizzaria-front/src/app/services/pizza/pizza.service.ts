import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/models/pizza/pizza';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {
  API: string = 'http://localhost:9090/api/pizza';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.API);
  }

  cadastrarPizza(pizza: Pizza): Observable<string> {
    return this.http.post(this.API, pizza, { responseType: 'text' });
  }

  atualizarPizza(id: number, pizza: Pizza): Observable<string> {
    return this.http.put(`${this.API}/${id}`, pizza, { responseType: 'text' });
  }

  deletarPizza(id: number): Observable<string> {
    return this.http.delete(`${this.API}/deletar/${id}`, { responseType: 'text' });
  }

  exemploErro(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.API + '/erro');
  }
}