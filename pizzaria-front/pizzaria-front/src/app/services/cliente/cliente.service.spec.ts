import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClienteService } from './cliente.service';
import { Cliente } from 'src/app/models/cliente/cliente';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService]
    });

    service = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve clientes from the API via GET', waitForAsync(() => {
    const mockClientes: Cliente[] = [
      { id: 1, ativo: true, nomeCliente: 'John Doe', cpf: '123456789', endereco: [], registro: new Date(), atualizar: new Date() },
      { id: 2, ativo: true, nomeCliente: 'Jane Doe', cpf: '987654321', endereco: [], registro: new Date(), atualizar: new Date() }
    ];

    service.listAll().subscribe((clientes: Cliente[]) => {
      expect(clientes.length).toBe(2);
      expect(clientes).toEqual(mockClientes);
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockClientes);
  }));

  it('should add a new cliente via POST', waitForAsync(() => {
    const newCliente: Cliente = { id: 3, ativo: true, nomeCliente: 'Alice Wonderland', cpf: '999888777', endereco: [], registro: new Date(), atualizar: new Date() };

    service.cadastrarCliente(newCliente).subscribe((response: string) => {
      expect(response).toBe('Cliente cadastrado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newCliente);
    request.flush('Cliente cadastrado com sucesso');
  }));

  it('should update an existing cliente via PUT', waitForAsync(() => {
    const updatedCliente: Cliente = { id: 1, ativo: true, nomeCliente: 'John Doe', cpf: '123456789', endereco: [], registro: new Date(), atualizar: new Date() };

    service.atualizarCliente(1, updatedCliente).subscribe((response: string) => {
      expect(response).toBe('Cliente atualizado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedCliente);
    request.flush('Cliente atualizado com sucesso');
  }));

  it('should delete an existing cliente via DELETE', waitForAsync(() => {
    const clienteIdToDelete = 1;

    service.deletarCliente(clienteIdToDelete).subscribe((response: string) => {
      expect(response).toBe('Cliente deletado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/deletar/${clienteIdToDelete}`);
    expect(request.request.method).toBe('DELETE');
    request.flush('Cliente deletado com sucesso');
  }));

});
