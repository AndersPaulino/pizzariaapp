import { TestBed, inject } from '@angular/core/testing';
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

  it('should return an Observable<Cliente[]>', () => {
    const mockClientes: Cliente[] = [new Cliente(), new Cliente()];
    service.listAll().subscribe(clientes => {
      expect(clientes).toEqual(mockClientes);
    });

    const req = httpMock.expectOne('http://localhost:9090/api/cliente');
    expect(req.request.method).toBe('GET');
    req.flush(mockClientes);
  });
});