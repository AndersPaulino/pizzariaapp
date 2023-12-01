import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente/cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    API: string = '/api/cliente';

    constructor(private http: HttpClient) {}

    listAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.API);
    }

    cadastrarCliente(cliente: Cliente): Observable<string> {
        return this.http.post(this.API, cliente, { responseType: 'text' });
    }

    atualizarCliente(id: number, cliente: Cliente): Observable<string> {
        return this.http.put(`${this.API}/${id}`, cliente, { responseType: 'text' });
    }

    deletarCliente(id: number): Observable<string> {
        return this.http.delete(`${this.API}/deletar/${id}`, { responseType: 'text' });
    }

    exemploErro(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.API + '/erro');
    }
}