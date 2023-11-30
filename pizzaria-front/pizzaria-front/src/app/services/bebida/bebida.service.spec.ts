import { TestBed, inject, waitForAsync } from '@angular/core/testing';
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

  it('should retrieve bebidas from the API via GET', waitForAsync(() => {
    const mockBebidas: Bebida[] = [
      { id: 1, ativo: true, nomeBebida: 'Coca Cola', valorBebida: 3.0, registro: new Date(), atualizar: new Date() },
      { id: 2, ativo: true, nomeBebida: 'Pepsi', valorBebida: 2.5, registro: new Date(), atualizar: new Date() }
    ];

    service.listAll().subscribe((bebidas: Bebida[]) => {
      expect(bebidas.length).toBe(2);
      expect(bebidas).toEqual(mockBebidas);
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockBebidas);
  }));

  it('should add a new bebida via POST', waitForAsync(() => {
    const newBebida: Bebida = { id: 3, ativo: true, nomeBebida: 'Sprite', valorBebida: 2.0, registro: new Date(), atualizar: new Date() };

    service.cadastrarBebida(newBebida).subscribe((response: string) => {
      expect(response).toBe('Bebida cadastrada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newBebida);
    request.flush('Bebida cadastrada com sucesso');
  }));

  it('should update an existing bebida via PUT', waitForAsync(() => {
    const updatedBebida: Bebida = { id: 1, ativo: true, nomeBebida: 'Coca Cola', valorBebida: 3.5, registro: new Date(), atualizar: new Date() };

    service.atualizarBebida(1, updatedBebida).subscribe((response: string) => {
      expect(response).toBe('Bebida atualizada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedBebida);
    request.flush('Bebida atualizada com sucesso');
  }));

  it('should delete an existing bebida via DELETE', waitForAsync(() => {
    const bebidaIdToDelete = 1;

    service.deletarBebida(bebidaIdToDelete).subscribe((response: string) => {
      expect(response).toBe('Bebida deletada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/deletar/${bebidaIdToDelete}`);
    expect(request.request.method).toBe('DELETE');
    request.flush('Bebida deletada com sucesso');
  }));
});
