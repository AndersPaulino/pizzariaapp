import { TestBed, inject, waitForAsync } from '@angular/core/testing';
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

  it('should retrieve pizzas from the API via GET', waitForAsync(() => {
    const mockPizzas: Pizza[] = [
      { id: 1, ativo: true, sabor: [], tamanho: 'Média', qtdeSabor: 1, valorPizza: 25.0, registro: new Date(), atualizar: new Date() },
      { id: 2, ativo: true, sabor: [], tamanho: 'Grande', qtdeSabor: 1, valorPizza: 30.0, registro: new Date(), atualizar: new Date() }
    ];

    service.listAll().subscribe((pizzas: Pizza[]) => {
      expect(pizzas.length).toBe(2);
      expect(pizzas).toEqual(mockPizzas);
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockPizzas);
  }));

  it('should add a new pizza via POST', waitForAsync(() => {
    const newPizza: Pizza = { id: 3, ativo: true, sabor: [], tamanho: 'Média', qtdeSabor: 1, valorPizza: 25.0, registro: new Date(), atualizar: new Date() };

    service.cadastrarPizza(newPizza).subscribe((response: string) => {
      expect(response).toBe('Pizza cadastrada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newPizza);
    request.flush('Pizza cadastrada com sucesso');
  }));

  it('should update an existing pizza via PUT', waitForAsync(() => {
    const updatedPizza: Pizza = { id: 1, ativo: true, sabor: [], tamanho: 'Média', qtdeSabor: 1, valorPizza: 28.0, registro: new Date(), atualizar: new Date() };

    service.atualizarPizza(1, updatedPizza).subscribe((response: string) => {
      expect(response).toBe('Pizza atualizada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedPizza);
    request.flush('Pizza atualizada com sucesso');
  }));

  it('should delete an existing pizza via DELETE', waitForAsync(() => {
    const pizzaIdToDelete = 1;

    service.deletarPizza(pizzaIdToDelete).subscribe((response: string) => {
      expect(response).toBe('Pizza deletada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/deletar/${pizzaIdToDelete}`);
    expect(request.request.method).toBe('DELETE');
    request.flush('Pizza deletada com sucesso');
  }));

});
