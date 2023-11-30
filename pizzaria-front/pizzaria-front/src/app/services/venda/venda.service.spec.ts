import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VendaService } from './venda.service';
import { Venda } from 'src/app/models/venda/venda';
import { Endereco } from 'src/app/models/endereco/endereco';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Funcionario } from 'src/app/models/funcionario/funcionario';

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

  it('should retrieve vendas from the API via GET', waitForAsync(() => {
    const mockEndereco: Endereco = { id: 1, ativo: true, bairro: 'Bairro', rua: 'Rua', numero: 123, registro: new Date(), atualizar: new Date() };
    const mockCliente: Cliente = { id: 1, ativo: true, nomeCliente: 'Cliente', cpf: '123456789', endereco: [mockEndereco], registro: new Date(), atualizar: new Date() };
    const mockFuncionario: Funcionario = { id: 1, ativo: true, nomeFuncionario: 'Funcionario', registro: new Date(), atualizar: new Date() };
    const mockVendas: Venda[] = [
      { id: 1, ativo: true, cliente: mockCliente, funcionario: mockFuncionario, pizzas: [], bebidas: [], emitirNota: false, entregar: false, valorVenda: 0, registro: new Date(), atualizar: new Date() },
      { id: 2, ativo: true, cliente: mockCliente, funcionario: mockFuncionario, pizzas: [], bebidas: [], emitirNota: false, entregar: false, valorVenda: 0, registro: new Date(), atualizar: new Date() }
    ];

    service.listAll().subscribe((vendas: Venda[]) => {
      expect(vendas.length).toBe(2);
      expect(vendas).toEqual(mockVendas);
    });

    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockVendas);
  }));

  it('should add a new venda via POST', waitForAsync(() => {
    const mockEndereco: Endereco = { id: 1, ativo: true, bairro: 'Bairro', rua: 'Rua', numero: 123, registro: new Date(), atualizar: new Date() };
    const mockCliente: Cliente = { id: 1, ativo: true, nomeCliente: 'Cliente', cpf: '123456789', endereco: [mockEndereco], registro: new Date(), atualizar: new Date() };
    const mockFuncionario: Funcionario = { id: 1, ativo: true, nomeFuncionario: 'Funcionario', registro: new Date(), atualizar: new Date() };
    const newVenda: Venda = { id: 3, ativo: true, cliente: mockCliente, funcionario: mockFuncionario, pizzas: [], bebidas: [], emitirNota: false, entregar: false, valorVenda: 0, registro: new Date(), atualizar: new Date() };
  
    service.cadastrarVenda(newVenda).subscribe((response: string) => {
      expect(response).toBe('Venda cadastrada com sucesso');
    });
  
    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('POST');
    // Check if the request body matches the expected structure
    expect(request.request.body).toEqual({
      id: 3,
      ativo: true,
      cliente: mockCliente,
      funcionario: mockFuncionario,
      pizzas: [],
      bebidas: [],
      emitirNota: false,
      entregar: false,
      valorVenda: 0,
      registro: new Date(),
      atualizar: new Date()
    });
    request.flush('Venda cadastrada com sucesso');
  }));
  
  it('should update an existing venda via PUT', waitForAsync(() => {
    const mockEndereco: Endereco = { id: 1, ativo: true, bairro: 'Bairro', rua: 'Rua', numero: 123, registro: new Date(), atualizar: new Date() };
    const mockCliente: Cliente = { id: 1, ativo: true, nomeCliente: 'Cliente', cpf: '123456789', endereco: [mockEndereco], registro: new Date(), atualizar: new Date() };
    const mockFuncionario: Funcionario = { id: 1, ativo: true, nomeFuncionario: 'Funcionario', registro: new Date(), atualizar: new Date() };
    const updatedVenda: Venda = { id: 1, ativo: true, cliente: mockCliente, funcionario: mockFuncionario, pizzas: [], bebidas: [], emitirNota: false, entregar: false, valorVenda: 0, registro: new Date(), atualizar: new Date() };
  
    service.atualizarVenda(1, updatedVenda).subscribe((response: string) => {
      expect(response).toBe('Venda atualizada com sucesso');
    });
  
    const request = httpMock.expectOne(`${service.API}/1`);
    expect(request.request.method).toBe('PUT');
    // Check if the request body matches the expected structure
    expect(request.request.body).toEqual(updatedVenda);
    request.flush('Venda atualizada com sucesso');
  }));
  
});
