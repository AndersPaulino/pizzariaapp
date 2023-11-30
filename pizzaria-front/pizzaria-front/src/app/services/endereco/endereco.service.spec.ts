import { TestBed, inject } from '@angular/core/testing';
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

  it('should return an Observable<Endereco[]>', () => {
    const mockEnderecos: Endereco[] = [new Endereco(), new Endereco()];
    service.listAll().subscribe(enderecos => {
      expect(enderecos).toEqual(mockEnderecos);
    });

    const req = httpMock.expectOne('http://localhost:9090/api/endereco');
    expect(req.request.method).toBe('GET');
    req.flush(mockEnderecos);
  });
});