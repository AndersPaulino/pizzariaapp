import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EnderecoService } from './endereco.service';
import { Endereco } from 'src/app/models/endereco/endereco';

describe('EnderecoService', () => {
  let service: EnderecoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnderecoService]
    });

    service = TestBed.inject(EnderecoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve enderecos from the API via GET', waitForAsync(() => {
    const mockEnderecos: Endereco[] = [
      { id: 1, ativo: true, bairro: 'Downtown', rua: 'Main Street', numero: 123, registro: new Date(), atualizar: new Date() },
      { id: 2, ativo: true, bairro: 'Uptown', rua: 'High Street', numero: 456, registro: new Date(), atualizar: new Date() }
    ];

    service.listAll().subscribe((enderecos: Endereco[]) => {
      expect(enderecos.length).toBe(2);
      expect(enderecos).toEqual(mockEnderecos);
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockEnderecos);
  }));

  it('should add a new endereco via POST', waitForAsync(() => {
    const newEndereco: Endereco = { id: 3, ativo: true, bairro: 'Midtown', rua: 'Broadway', numero: 789, registro: new Date(), atualizar: new Date() };

    service.cadastrarEndereco(newEndereco).subscribe((response: string) => {
      expect(response).toBe('Endereco cadastrado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newEndereco);
    request.flush('Endereco cadastrado com sucesso');
  }));

  it('should update an existing endereco via PUT', waitForAsync(() => {
    const updatedEndereco: Endereco = { id: 1, ativo: true, bairro: 'Downtown', rua: 'Main Street', numero: 123, registro: new Date(), atualizar: new Date() };

    service.atualizarEndereco(1, updatedEndereco).subscribe((response: string) => {
      expect(response).toBe('Endereco atualizado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedEndereco);
    request.flush('Endereco atualizado com sucesso');
  }));

  it('should delete an existing endereco via DELETE', waitForAsync(() => {
    const enderecoIdToDelete = 1;

    service.deletarEndereco(enderecoIdToDelete).subscribe((response: string) => {
      expect(response).toBe('Endereco deletado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/deletar/${enderecoIdToDelete}`);
    expect(request.request.method).toBe('DELETE');
    request.flush('Endereco deletado com sucesso');
  }));

  it('should handle error for exemploErro', waitForAsync(() => {
    service.exemploErro().subscribe(
      () => fail('Expected an error, but succeeded'),
      (error: any) => {
        expect(error.status).toBe(500);
        expect(error.error).toBe('Internal Server Error');
      }
    );

    const request = httpMock.expectOne(`${service.API}/erro`);
    expect(request.request.method).toBe('GET');
    request.flush(null, { status: 500, statusText: 'Internal Server Error' });
  }));
});
