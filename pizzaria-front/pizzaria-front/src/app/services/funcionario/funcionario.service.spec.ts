import { TestBed, inject } from '@angular/core/testing';
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

  it('should return an Observable<Funcionario[]>', () => {
    const mockFuncionarios: Funcionario[] = [];
    service.listAll().subscribe(funcionarios => {
      expect(funcionarios).toEqual(mockFuncionarios);
    });

    const req = httpMock.expectOne('http://localhost:9090/api/funcionario');
    expect(req.request.method).toBe('GET');
    req.flush(mockFuncionarios);
  });
});