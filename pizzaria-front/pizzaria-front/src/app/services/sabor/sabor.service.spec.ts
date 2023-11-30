import { TestBed, inject, waitForAsync } from '@angular/core/testing';
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

  it('should retrieve sabores from the API via GET', waitForAsync(() => {
    const mockSabores: Sabor[] = [
      { id: 1, ativo: true, nomeSabor: 'Margherita', registro: new Date(), atualizar: new Date() },
      { id: 2, ativo: true, nomeSabor: 'Pepperoni', registro: new Date(), atualizar: new Date() }
    ];

    service.listAll().subscribe((sabores: Sabor[]) => {
      expect(sabores.length).toBe(2);
      expect(sabores).toEqual(mockSabores);
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockSabores);
  }));

  it('should add a new sabor via POST', waitForAsync(() => {
    const newSabor: Sabor = { id: 3, ativo: true, nomeSabor: 'Calabresa', registro: new Date(), atualizar: new Date() };

    service.cadastrarSabor(newSabor).subscribe((response: string) => {
      expect(response).toBe('Sabor cadastrado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newSabor);
    request.flush('Sabor cadastrado com sucesso');
  }));

  it('should update an existing sabor via PUT', waitForAsync(() => {
    const updatedSabor: Sabor = { id: 1, ativo: true, nomeSabor: 'Calabresa', registro: new Date(), atualizar: new Date() };

    service.atualizarSabor(1, updatedSabor).subscribe((response: string) => {
      expect(response).toBe('Sabor atualizado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedSabor);
    request.flush('Sabor atualizado com sucesso');
  }));

  it('should delete an existing sabor via DELETE', waitForAsync(() => {
    const saborIdToDelete = 1;

    service.deletarSabor(saborIdToDelete).subscribe((response: string) => {
      expect(response).toBe('Sabor deletado com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/deletar/${saborIdToDelete}`);
    expect(request.request.method).toBe('DELETE');
    request.flush('Sabor deletado com sucesso');
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
