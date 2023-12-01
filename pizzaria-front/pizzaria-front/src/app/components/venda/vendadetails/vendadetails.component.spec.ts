import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { VendadetailsComponent } from './vendadetails.component';
import { VendaService } from 'src/app/services/venda/venda.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Venda } from 'src/app/models/venda/venda';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Bebida } from 'src/app/models/bebida/bebida';
import { Pizza } from 'src/app/models/pizza/pizza';
import { Funcionario } from 'src/app/models/funcionario/funcionario';

describe('VendadetailsComponent', () => {
  let component: VendadetailsComponent;
  let fixture: ComponentFixture<VendadetailsComponent>;
  let modalService: NgbModal;
  let vendaService: VendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendadetailsComponent],
      imports: [NgbModalModule, HttpClientModule, FormsModule],
      providers: [NgbModal, VendaService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(VendadetailsComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    vendaService = TestBed.inject(VendaService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call salvar method on button click', () => {
    spyOn(component.retorno, 'emit');
    component.salvar();

    expect(component.retorno.emit).toHaveBeenCalledWith(component.venda);
  });

  it('should open modal on button click', () => {
    spyOn(modalService, 'open');
    component.lancar('modal5');

    expect(modalService.open).toHaveBeenCalledOnceWith('modal5');
  });

  it('should call excluirVenda method on button click', () => {
    spyOn(component, 'excluirVenda');
    const mockVenda: Venda = {
      id: 1,
      ativo: true,
      cliente: [{
        id: 1,
        ativo: true,
        nomeCliente: 'Test Cliente',
        cpf: '123456789',
        registro: new Date(),
        atualizar: new Date(),
        endereco: [{
          id: 1,
          ativo: true,
          bairro: 'Test Bairro',
          rua: 'Test Rua',
          numero: 123,
          registro: new Date(),
          atualizar: new Date()
        }]
      }],
      funcionario: [{
        id: 1,
        ativo: true,
        nomeFuncionario: 'Test Funcionario',
        registro: new Date(),
        atualizar: new Date()
      }],

      pizzas: [],
      bebidas: [],
      emitirNota: false,
      entregar: false,
      valorVenda: 0,
      registro: new Date(),
      atualizar: new Date()
    };

    // Simula o botão sendo clicado
    component.excluirVenda(mockVenda, 0);

    
    expect(component.excluirVenda).toHaveBeenCalledWith(mockVenda, 0);
  });
  //aqui
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should emit retorno when salvar() is called', () => {
    const venda = new Venda();
    spyOn(component.retorno, 'emit');
  
    component.venda = venda;
    component.salvar();
  
    expect(component.retorno.emit).toHaveBeenCalledWith(venda);
  });
  it('should remove cliente from venda.cliente array when excluirCliente() is called', () => {
    const cliente = new Cliente();
    component.venda.cliente = [cliente];
  
    component.excluirCliente(cliente, 0);
  
    expect(component.venda.cliente.length).toBe(0);
  });
  
  it('should remove funcionario from venda.funcionario array when excluirFuncionario() is called', () => {
    const funcionario = new Funcionario();
    component.venda.funcionario = [funcionario];
  
    component.excluirFuncionario(funcionario, 0);
  
    expect(component.venda.funcionario.length).toBe(0);
  });
  
  it('should remove pizza from venda.pizzas array when excluirPizza() is called', () => {
    const pizza = new Pizza();
    component.venda.pizzas = [pizza];
  
    component.excluirPizza(pizza, 0);
  
    expect(component.venda.pizzas.length).toBe(0);
  });
  
  it('should remove bebida from venda.bebidas array when excluirBebida() is called', () => {
    const bebida = new Bebida();
    component.venda.bebidas = [bebida];
  
    component.excluirBebida(bebida, 0);
  
    expect(component.venda.bebidas.length).toBe(0);
  });
  

  it('should dismiss the modal when retornoClienteList() is called', () => {
    spyOn(component.modalRef, 'dismiss');
  
    const cliente = new Cliente();
    component.retornoClienteList(cliente);
  
    expect(component.modalRef.dismiss).toHaveBeenCalled();
  });
  
  it('should dismiss the modal when retornoFuncionarioList() is called', () => {
    spyOn(component.modalRef, 'dismiss');
  
    const funcionario = new Funcionario();
    component.retornoFuncionarioList(funcionario);
  
    expect(component.modalRef.dismiss).toHaveBeenCalled();
  });
  
  it('should dismiss the modal when retornoPizzaList() is called', () => {
    spyOn(component.modalRef, 'dismiss');
  
    const pizza = new Pizza();
    component.retornoPizzaList(pizza);
  
    expect(component.modalRef.dismiss).toHaveBeenCalled();
  });
  
  it('should dismiss the modal when retornoBebidaList() is called', () => {
    spyOn(component.modalRef, 'dismiss');
  
    const bebida = new Bebida();
    component.retornoBebidaList(bebida);
  
    expect(component.modalRef.dismiss).toHaveBeenCalled();
  });
  
  
  

});
