import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from 'src/app/models/funcionario/funcionario';

describe('FuncionarioService', () => {
  let service: FuncionarioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FuncionarioService]
    });

    service = TestBed.inject(FuncionarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve funcionarios from the API via GET', waitForAsync(() => {
    const mockFuncionarios: Funcionario[] = [
      { id: 1, ativo: true, nomeFuncionario: 'John Doe', registro: new Date(), atualizar: new Date() },
      { id: 2, ativo: true, nomeFuncionario: 'Jane Doe', registro: new Date(), atualizar: new Date() }
    ];

    service.listAll().subscribe((funcionarios: Funcionario[]) => {
      expect(funcionarios.length).toBe(2);
      expect(funcionarios).toEqual(mockFuncionarios);
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockFuncionarios);
  }));

  it('should add a new funcionario via POST', waitForAsync(() => {
    const newFuncionario: Funcionario = { id: 3, ativo: true, nomeFuncionario: 'New Employee', registro: new Date(), atualizar: new Date() };

    service.cadastrarFuncionario(newFuncionario).subscribe((response: string) => {
      expect(response).toBe('Funcionario cadastrado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newFuncionario);
    request.flush('Funcionario cadastrado com sucesso');
  }));

  it('should update an existing funcionario via PUT', waitForAsync(() => {
    const updatedFuncionario: Funcionario = { id: 1, ativo: true, nomeFuncionario: 'John Doe', registro: new Date(), atualizar: new Date() };

    service.atualizarFuncionario(1, updatedFuncionario).subscribe((response: string) => {
      expect(response).toBe('Funcionario atualizado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedFuncionario);
    request.flush('Funcionario atualizado com sucesso');
  }));

  it('should delete an existing funcionario via DELETE', waitForAsync(() => {
    const funcionarioIdToDelete = 1;

    service.deletarFuncionario(funcionarioIdToDelete).subscribe((response: string) => {
      expect(response).toBe('Funcionario deletado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/deletar/${funcionarioIdToDelete}`);
    expect(request.request.method).toBe('DELETE');
    request.flush('Funcionario deletado com sucesso');
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
