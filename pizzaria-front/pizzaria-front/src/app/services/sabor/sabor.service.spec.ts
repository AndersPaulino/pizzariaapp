import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SaborService } from './sabor.service';
import { Sabor } from 'src/app/models/sabor/sabor';

describe('SaborService', () => {
  let service: SaborService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SaborService]
    });
    service = TestBed.inject(SaborService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Sabor[]>', () => {
    const mockSabores: Sabor[] = [];
    service.listAll().subscribe(sabores => {
      expect(sabores).toEqual(mockSabores);
    });

    const req = httpMock.expectOne('http://localhost:9090/api/sabor');
    expect(req.request.method).toBe('GET');
    req.flush(mockSabores);
  });
});