import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BebidaService } from './bebida.service';
import { Bebida } from 'src/app/models/bebida/bebida';

describe('BebidaService', () => {
  let service: BebidaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BebidaService]
    });
    service = TestBed.inject(BebidaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Bebida[]>', () => {
    const mockBebidas: Bebida[] = [new Bebida(), new Bebida()];
    service.listAll().subscribe(bebidas => {
      expect(bebidas).toEqual(mockBebidas);
    });

    const req = httpMock.expectOne('http://localhost:9090/api/bebida');
    expect(req.request.method).toBe('GET');
    req.flush(mockBebidas);
  });
});