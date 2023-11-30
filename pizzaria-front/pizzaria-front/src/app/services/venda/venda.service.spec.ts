import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VendaService } from './venda.service';
import { Venda } from 'src/app/models/venda/venda';

describe('VendaService', () => {
  let service: VendaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VendaService]
    });
    service = TestBed.inject(VendaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Venda[]>', () => {
    const mockVendas: Venda[] = [];
    service.listAll().subscribe(vendas => {
      expect(vendas).toEqual(mockVendas);
    });

    const req = httpMock.expectOne('http://localhost:9090/api/venda');
    expect(req.request.method).toBe('GET');
    req.flush(mockVendas);
  });
});