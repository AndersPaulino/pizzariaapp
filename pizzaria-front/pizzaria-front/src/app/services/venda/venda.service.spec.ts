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

  it('should retrieve vendas successfully from API', () => {
    const mockVendas = [
      { id: 1,ativo:true, cliente: [], funcionario: [], pizzas: [], bebidas: [], emitirNota: false, entregar: false, valorVenda: 0, registro: new Date(), atualizar: new Date() },
      { id: 2,ativo:true, cliente: [], funcionario: [], pizzas: [], bebidas: [], emitirNota: false, entregar: false, valorVenda: 0, registro: new Date(), atualizar: new Date() }
    ];

    service.listAll().subscribe((vendas) => {
      expect(vendas).toEqual(mockVendas);
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockVendas);
  });

  it('should handle errors when retrieving vendas from API', () => {
    const errorMessage = 'Error fetching vendas';

    service.listAll().subscribe(
      () => fail('Expected an error, but received data'),
      (error) => {
        expect(error).toBe(errorMessage);
      }
    );

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.error(new ErrorEvent('Network error', { message: errorMessage }));
  });

  it('should handle successful venda creation', () => {
    const mockVenda: Venda = {
      id: 1,
      ativo:true,
      cliente: [],
      funcionario: [],
      pizzas: [],
      bebidas: [],
      emitirNota: false,
      entregar: false,
      valorVenda: 0,
      registro: new Date(),
      atualizar: new Date()
    };

    service.cadastrarVenda(mockVenda).subscribe((response) => {
      expect(response).toBe('Venda cadastrada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    request.flush('Venda cadastrada com sucesso');
  });

  it('should handle errors during venda creation', () => {
    const errorMessage = 'Error creating venda';
    const mockVenda: Venda = {
      id: 1,
      ativo:true,
      cliente: [],
      funcionario: [],
      pizzas: [],
      bebidas: [],
      emitirNota: false,
      entregar: false,
      valorVenda: 0,
      registro: new Date(),
      atualizar: new Date()
    };

    service.cadastrarVenda(mockVenda).subscribe(
      () => fail('Expected an error, but received data'),
      (error) => {
        expect(error).toBe(errorMessage);
      }
    );

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    request.error(new ErrorEvent('Network error', { message: errorMessage }));
  });

  it('should handle successful venda update', () => {
    const mockVenda: Venda = {
      id: 1,
      ativo:true,
      cliente: [],
      funcionario: [],
      pizzas: [],
      bebidas: [],
      emitirNota: false,
      entregar: false,
      valorVenda: 0,
      registro: new Date(),
      atualizar: new Date()
    };

    service.atualizarVenda(1, mockVenda).subscribe((response) => {
      expect(response).toBe('Venda atualizada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    request.flush('Venda atualizada com sucesso');
  });

  it('should handle errors during venda update', () => {
    const errorMessage = 'Error updating venda';
    const mockVenda: Venda = {
      id: 1,
      ativo:true,
      cliente: [],
      funcionario: [],
      pizzas: [],
      bebidas: [],
      emitirNota: false,
      entregar: false,
      valorVenda: 0,
      registro: new Date(),
      atualizar: new Date()
    };

    service.atualizarVenda(1, mockVenda).subscribe(
      () => fail('Expected an error, but received data'),
      (error) => {
        expect(error).toBe(errorMessage);
      }
    );

    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    request.error(new ErrorEvent('Network error', { message: errorMessage }));
  });

  it('should handle successful venda deletion', () => {
    const vendaId = 1;

    service.deletarVenda(vendaId).subscribe((response) => {
      expect(response).toBe('Venda deletada com sucesso');
    });

    const request = httpMock.expectOne(`${service.API}/deletar/${vendaId}`);
    expect(request.request.method).toBe('DELETE');
    request.flush('Venda deletada com sucesso');
  });

  it('should handle errors during venda deletion', () => {
    const vendaId = 1;
    const errorMessage = 'Error deleting venda';

    service.deletarVenda(vendaId).subscribe(
      () => fail('Expected an error, but received data'),
      (error) => {
        expect(error).toBe(errorMessage);
      }
    );

    const request = httpMock.expectOne(`${service.API}/deletar/${vendaId}`);
    expect(request.request.method).toBe('DELETE');
    request.error(new ErrorEvent('Network error', { message: errorMessage }));
  });

  it('should retrieve vendas with error from API', () => {
    const errorMessage = 'Error fetching vendas with error';

    service.exemploErro().subscribe(
      () => fail('Expected an error, but received data'),
      (error) => {
        expect(error).toBe(errorMessage);
      }
    );

    const request = httpMock.expectOne(`${service.API}/erro`);
    expect(request.request.method).toBe('GET');
    request.error(new ErrorEvent('Network error', { message: errorMessage }));
  });
});
