import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PizzaService } from './pizza.service';
import { Pizza } from 'src/app/models/pizza/pizza';

describe('PizzaService', () => {
  let service: PizzaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PizzaService]
    });
    service = TestBed.inject(PizzaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Pizza[]>', () => {
    const mockPizzas: Pizza[] = [];
    service.listAll().subscribe(pizzas => {
      expect(pizzas).toEqual(mockPizzas);
    });

    const req = httpMock.expectOne('http://localhost:9090/api/pizza');
    expect(req.request.method).toBe('GET');
    req.flush(mockPizzas);
  });
});