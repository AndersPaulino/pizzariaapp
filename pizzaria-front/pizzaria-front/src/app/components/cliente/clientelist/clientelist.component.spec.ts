import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { ClientelistComponent } from './clientelist.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ClientelistComponent', () => {
  let component: ClientelistComponent;
  let fixture: ComponentFixture<ClientelistComponent>;
  let modalService: NgbModal;
  let clienteService: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientelistComponent],
      imports: [FormsModule, NgbModalModule, HttpClientModule],
      providers: [NgbModal, ClienteService],
    });
    fixture = TestBed.createComponent(ClientelistComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    clienteService = TestBed.inject(ClienteService);
    spyOn(component, 'listAll').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal on adicionar', () => {
    spyOn(modalService, 'open').and.returnValue({ result: Promise.resolve(true) } as NgbModalRef);
    component.adicionar({});
    expect(modalService.open).toHaveBeenCalled();
  });

  it('should handle listAll success', fakeAsync(() => {
    const clientes = [
      { id: 1,ativo: true, nomeCliente: 'Cliente 1', cpf: '123456789', endereco: [], registro: new Date(), atualizar: new Date() },
      { id: 2,ativo: true, nomeCliente: 'Cliente 2', cpf: '987654321', endereco: [], registro: new Date(), atualizar: new Date() },
    ];
    spyOn(clienteService, 'listAll').and.returnValue(of(clientes));

    component.listAll();
    tick();

    expect(component.lista).toEqual(clientes);
  }));

  it('should handle listAll error', fakeAsync(() => {
    spyOn(clienteService, 'listAll').and.returnValue(throwError('Erro ao buscar clientes'));

    component.listAll();
    tick();

    expect(component.lista).toEqual([]);
  }));

  it('should handle deletar success', fakeAsync(() => {
    const clientes = [
      { id: 1, ativo: true, nomeCliente: 'Cliente 1', cpf: '123456789', endereco: [], registro: new Date(), atualizar: new Date() },
      { id: 2, ativo: true, nomeCliente: 'Cliente 2', cpf: '987654321', endereco: [], registro: new Date(), atualizar: new Date() },
    ];

    // Simula a exclusão bem-sucedida
    spyOn(clienteService, 'deletarCliente').and.returnValue(of('Exclusão bem-sucedida'));

    // Simula a listagem de clientes após a exclusão
    spyOn(clienteService, 'listAll').and.returnValue(of(clientes));

    component.deletar(1);
    tick();

    // Verifica se a lista foi atualizada corretamente
    expect(component.lista).toEqual(clientes);

    // Verifica se a mensagem de erro está indefinida em caso de sucesso.
    expect(component.mensagemErro).toBeUndefined();
}));


  it('should handle deletar error', fakeAsync(() => {
    spyOn(clienteService, 'deletarCliente').and.returnValue(throwError('Erro ao deletar cliente'));

    component.deletar(1);
    tick();

    expect(component.lista).toEqual([]);
    expect(component.mensagemErro).toEqual('Erro ao deletar cliente'); // Verificando se a mensagem de erro foi definida corretamente em caso de falha.
  }));

  it('should handle addOuEditarCliente for updating', fakeAsync(() => {
    const cliente = { id: 1, ativo: true, nomeCliente: 'Cliente 1', cpf: '123456789', endereco: [], registro: new Date(), atualizar: new Date() };
    spyOn(clienteService, 'atualizarCliente').and.returnValue(of('Atualização bem-sucedida'));

    component.addOuEditarCliente(cliente);
    tick();

    expect(component.lista).toEqual([cliente]);
}));

it('should handle addOuEditarCliente for creating', fakeAsync(() => {
  const cliente = { id: 1, ativo: true, nomeCliente: 'Cliente 1', cpf: '123456789', endereco: [], registro: new Date(), atualizar: new Date() };
    spyOn(clienteService, 'cadastrarCliente').and.returnValue(of('Cadastro bem-sucedido'));

    component.addOuEditarCliente(cliente);
    tick();

    expect(component.lista).toEqual([cliente]);
}));


});
